import { expect, test } from "vitest";
import { slugify } from "./slugify";

test("slugify shouldn't modify if not necessary", () => {
  expect(slugify("already-fine")).toBe("already-fine");
});

test("slugify should remove whitespace", () => {
  expect(slugify("this has some whitespace")).toBe("this-has-some-whitespace");
});

test("slugify should lowercase input", () => {
  expect(slugify("UppErCaSe")).toBe("uppercase");
});
