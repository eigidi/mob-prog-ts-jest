import generateFizzBuzz from './fizzBuzzService';

describe('FizzBuzz', () => {

  [ 4, -1, 1].forEach((i) => {
    test(`should return Not a FB when the number is ${i}`, () => {
      const expected = "Not a FB";
      expect(generateFizzBuzz.generateFizzBuzz(i)).toBe(expected);
    });
  })

  test('should return Fizz when the number can be divided by 3', () => {
    const inputs = [9, 12, 18];
    const expected = "Fizz";
    inputs.forEach((i) => {
      expect(generateFizzBuzz.generateFizzBuzz(i)).toBe(expected);
    });
  });


  test('should return Buzz when the number can be divided by 5', () => {
    const inputs = [5, 10, 25];
    const expected = "Buzz";
    inputs.forEach((i) => {
      expect(generateFizzBuzz.generateFizzBuzz(i)).toBe(expected);
    });
  });

  test('should return FizzBuzz when the number can be devided by 3 and 5', () => {
    const inputs = [0, 15, 30, 45];
    const expected = "FizzBuzz";

    inputs.forEach((i) => {
      expect(generateFizzBuzz.generateFizzBuzz(i)).toBe(expected);
    });
  });

  test('should return Not a FB when the argument is not a number', () => {
    const inputs = ["boka", [0, 15, 30, 45], {Number: 5}, undefined];
    const expected = "Not a FB";

    inputs.forEach((i) => {
      expect(generateFizzBuzz.generateFizzBuzz(i)).toBe(expected);
    });
  });
});
