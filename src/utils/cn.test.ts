import { describe, expect, test } from "vitest";
import { cn } from "./cn";

describe("cn should be able to handle different types", () => {
  test.each([
    [null, ""],
    [undefined, ""],
    ["test-class", "test-class"],
    [5, "5"],
  ])(
    "cn should be able to handle %s",
    (actual: null | undefined | string | number, expected: string) => {
      expect(cn(actual)).toBe(expected);
    }
  );
});

test.each([
  ["text-red-100 text-blue-200", "text-blue-200"],
  ["mb-4 mb-2", "mb-2"],
])(
  "cn should collapse tailwind classes of the same type (%s, %s)",
  (actual: string, expected: string) => {
    expect(cn(actual)).toBe(expected);
  }
);
