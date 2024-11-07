import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { wait } from "./wait";

const mock = vi.fn(() => {});

describe("wait", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  test("wait should be able to wait for a specific number of milliseconds", async () => {
    wait(2000).then(mock);
    expect(mock).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1000);
    expect(mock).not.toHaveBeenCalled();

    await vi.advanceTimersByTimeAsync(1001);
    expect(mock).toHaveBeenCalledOnce();
  });
});
