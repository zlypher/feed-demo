import { expect, test } from "vitest";
import { formatDatetime } from "./format-datetime";

test("formatDatetime should display full date and time", () => {
  expect(formatDatetime(new Date("2024-08-23T14:33:22"))).toBe(
    "23.08.24, 14:33"
  );
});
