import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // await page.goto("https://feed-demo-blue.vercel.app/");
  await page.goto("http://localhost:3000/");
});

test.describe("Navigation", () => {
  test("should contain exactly four elements", async ({ page }) => {
    const navItems = page.getByTestId("nav-item");

    await expect(navItems).toHaveCount(4);
  });

  test("should have a label for each element", async ({ page }) => {
    const navItems = await page.getByTestId("nav-item");

    for (let i = 0; i < (await navItems.count()); i++) {
      const navItem = navItems.nth(i);

      const ariaLabel = await navItem.getAttribute("aria-label");
      await expect(ariaLabel).not.toBeNull();
      await expect(ariaLabel).not.toBe("");
    }
  });

  test("should navigate to different pages when elements are clicked", async ({
    page,
  }) => {
    const favoritesButton = page.getByLabel("Zu den Favoriten");
    await favoritesButton.click();
    await expect(page).toHaveURL(/.*favorites/);

    const categoriesButton = page.getByLabel("Zu den Kategorien");
    await categoriesButton.click();
    await expect(page).toHaveURL(/.*categories/);

    const profileButton = page.getByLabel("Zum Profil");
    await profileButton.click();
    await expect(page).toHaveURL(/.*profile/);

    const feedButton = page.getByLabel("Zum Feed");
    await feedButton.click();
    await expect(page).toHaveURL(/.*\/$/);
  });

  test("should mark the current page", async ({ page }) => {
    const categoriesButton = page.getByLabel("Zu den Kategorien");
    await categoriesButton.click();
    await expect(page).toHaveURL(/.*categories/);
    await expect(categoriesButton).toHaveAttribute("aria-current", "page");
  });
});
