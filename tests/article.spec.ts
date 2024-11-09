import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  // await page.goto("https://feed-demo-blue.vercel.app/");
  // await page.goto("https://feed-demo-blue.vercel.app/article/skifahren-zwischen-lust-frust-und-zukunftsangst");
  await page.goto("http://localhost:3000/");
  await page.goto(
    "http://localhost:3000/article/skifahren-zwischen-lust-frust-und-zukunftsangst"
  );
});

test.describe("Article", () => {
  test("should contain the navigation", async ({ page }) => {
    const navigation = page.getByRole("navigation");

    await expect(navigation).toBeVisible();
  });

  test("should contain header-image, headline and content", async ({
    page,
  }) => {
    const headerImage = page.getByTestId("header-image");
    const headline = page.getByRole("heading");
    const content = page.getByTestId("content");

    await expect(headerImage).toBeVisible();
    await expect(headline).toBeVisible();
    await expect(content).toBeVisible();
  });

  test("should return to previous page when clicking on the back button", async ({
    page,
  }) => {
    const backButton = page.getByTestId("back-button");

    await backButton.click();
    await expect(page).toHaveURL(/.*\/$/);
  });

  test("should show a custom not found page if the article is not available", async ({
    page,
  }) => {
    const response = await page.goto(
      "http://localhost:3000/article/article-does-not-exist"
    );
    const notFound = page.getByTestId("article-not-found");

    expect(response?.status()).toBe(404);
    await expect(notFound).toBeVisible();
  });

  test("should show a custom error page if the article is not available", async ({
    page,
  }) => {
    const response = await page.goto(
      "http://localhost:3000/article/article-throws-error"
    );
    const error = page.getByTestId("article-error");

    expect(response?.status()).toBe(500);
    await expect(error).toBeVisible();
  });
});
