const arr = Array.from(Array(100).keys()).map((x) => x + 1); // 1~100

const fizzBuzz = (item) => {
  const result = (!(item % 3) ? "Fizz" : "").concat(!(item % 5) ? "Buzz" : "");
  return result ? result : item;
};

const solution = (x) => {
  return fizzBuzz(x);
};

module.exports = { solution };
