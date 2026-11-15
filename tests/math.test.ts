import { add, isEven } from "../src/math";
import { describe, test, expect } from "@jest/globals";

describe("math", () => {
  test("add sums two numbers", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("isEven detects even and odd numbers", () => {
    expect(isEven(4)).toBe(true);
    expect(isEven(7)).toBe(false);
  });
});
