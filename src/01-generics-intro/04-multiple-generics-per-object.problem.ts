import { expect, it } from "vitest";
import { Equal, Expect } from "../helpers/type-utils";

const returnBothOfWhatIPassIn = <TA, TB>(params: { a: TA; b: TB }) => {
  return {
    first: params.a,
    second: params.b,
  };
};

it("Should return an object where a -> first and b -> second", () => {
  const result = returnBothOfWhatIPassIn({
    b: 1,
    a: "a",
  });

  expect(result).toEqual({
    first: "a",
    second: 1,
  });

  type test1 = Expect<
    Equal<
      typeof result,
      {
        first: string;
        second: number;
      }
    >
  >;
});
