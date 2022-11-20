const fizzBuzz = (item: number): number | string => {
  const result = (!(item % 3) ? "Fizz" : "").concat(!(item % 5) ? "Buzz" : "");
  return result ? result : item;
};

const solution = (item: number): number | string => {
  return fizzBuzz(item)
}

export default solution;
