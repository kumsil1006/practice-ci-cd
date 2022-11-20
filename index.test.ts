import fizzBuzz from './index';

test("Fizz", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
  expect(fizzBuzz(9)).toBe("Fizz");
});

test("Buzz", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
  expect(fizzBuzz(50)).toBe("Buzz");
});

test("FizzBuzz", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
  expect(fizzBuzz(30)).toBe("FizzBuzz");
});

test("number", () => {
  expect(fizzBuzz(1)).toBe(1);
  expect(fizzBuzz(2)).toBe(2);
  expect(fizzBuzz(49)).toBe(49);
  expect(fizzBuzz(51)).toBe(51);
});
