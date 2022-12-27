import { CalculateNetSalary } from './CalculateNetSalary';

describe('Calculate the net salary', () => {
  it('should be able to calculate the net salary', () => {
    const grossSalary = 1000;

    const taxRate = 0.13;

    const bonus = 465;

    const mealTicket = grossSalary / 3;

    expect(
      CalculateNetSalary.execute({
        grossSalary,
        taxRate,
        bonus,
        mealTicket,
      })
    ).toEqual(1668.33);
  });
});
