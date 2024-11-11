import { test, expect } from "@playwright/test";

test.describe("Feed", () => {
  test("should show two placeholder items and no articles while loading", async ({
    page,
  }) => {
    await page.route("*/**/api/v1/articles", async (route) => {
      const response = await route.fetch();
      const json = await response.json();
      await new Promise((resolve) => setTimeout(resolve, 1000));
      await route.fulfill({ response, json });
    });

    await page.goto("/");

    const placeholder = page.getByTestId("article-list-item-placeholder");
    const articlesItems = page.getByTestId("article-list-item");

    await expect(placeholder).toHaveCount(2);
    await expect(articlesItems).toHaveCount(0);

    await page.unrouteAll({ behavior: "ignoreErrors" });
  });

  test("should show an error state if loading fails", async ({ page }) => {
    await page.route("*/**/api/v1/articles", async (route) => {
      await route.fulfill({
        status: 500,
        contentType: "text/plain",
        body: "Server Error!",
      });
    });

    await page.goto("/");

    const error = page.getByTestId("article-list-error");

    await expect(error).toBeVisible();

    await page.unrouteAll({ behavior: "ignoreErrors" });
  });

  test("should display a list of article items", async ({ page }) => {
    await page.goto("/");

    const articleItems = page.getByTestId("article-list-item");

    await expect(articleItems).toHaveCount(9);
  });

  test("should open the article page after clicking on an article item", async ({
    page,
  }) => {
    await page.goto("/");

    const firstArticleItem = page.getByTestId("article-list-item").first();
    await firstArticleItem.getByRole("link").click();

    await expect(page).toHaveURL(
      /.*article\/die\-us\-demokraten\-treten\-schlechten\-vorzeichen\-mit\-ihren\-all\-stars\-entgegen/
    );
  });
});
