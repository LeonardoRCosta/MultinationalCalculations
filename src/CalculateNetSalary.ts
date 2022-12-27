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

    return Number(netSalary.toFixed(2));
  }
}
