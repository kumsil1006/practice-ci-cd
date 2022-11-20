import solution from './index';

test("Fizz", () => {
  expect (solution(3)).toBe("Fizz");
  expect (solution(9)).toBe("Fizz");
  expect (solution(51)).toBe("Fizz");
});

test("Buzz", () => {
  expect (solution(5)).toBe("Buzz");
  expect (solution(50)).toBe("Buzz");
});

test("FizzBuzz", () => {
  expect(solution(15)).toBe("FizzBuzz");
  expect(solution(30)).toBe("FizzBuzz");
});

test("number", () => {
  expect(solution(1)).toBe(1);
  expect(solution(2)).toBe(2);
  expect(solution(49)).toBe(49);
});
