import { defineConfig, devices } from "@playwright/test";

const PORT = process.env.PORT || 3000;
const baseUrl = `http://localhost:${PORT}`;

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests-e2e",
  forbidOnly: !!process.env.CI,
  retries: 3,
  workers: 4,
  reporter: "html",
  use: {
    baseURL: baseUrl,
    trace: "on-first-retry",
  },

  projects: [
    {
      name: "Mobile Chrome",
      use: { ...devices["Pixel 5"] },
    },
    {
      name: "Mobile Safari",
      use: { ...devices["iPhone 12"] },
    },
  ],

  webServer: {
    command: "npm run dev",
    url: baseUrl,
    reuseExistingServer: !process.env.CI,
  },
});
