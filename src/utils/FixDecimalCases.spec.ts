import { FixDecimalCases } from './FixDecimalCases';

describe("Fixate the number's decimal cases", () => {
  it("should be able to fix the number's decimal cases to the number passed as argument", () => {
    const number = 100.3333333;

    const fixNumber = FixDecimalCases.execute({
      desiredDecimalCases: 2,
      number,
    });

    expect(fixNumber).toEqual(Number(number.toFixed(2)));
  });
});
