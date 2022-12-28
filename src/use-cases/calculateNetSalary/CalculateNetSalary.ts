import { FixDecimalCases } from '../../utils/FixDecimalCases';

interface ICalculateNetSalaryProps {
  grossSalary: number;
  taxRate: number;
  bonus: number;
  mealTicket: number;
}
export class CalculateNetSalary {
  static execute({
    grossSalary,
    taxRate,
    bonus,
    mealTicket,
  }: ICalculateNetSalaryProps): number {
    if (!taxRate) throw new Error('Invalid employee position!');

    const netSalary = grossSalary - grossSalary * taxRate + bonus + mealTicket;

    // turn into util
    return FixDecimalCases.execute({
      desiredDecimalCases: 2,
      number: netSalary,
    });
  }
}
