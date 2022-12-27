interface ICalculateMealTicketProps {
  employeePosition: string;
  workCoefficient: number | undefined;
  grossSalary: number;
}

export class CalculateMealTicket {
  static execute({
    employeePosition,
    workCoefficient,
    grossSalary,
  }: ICalculateMealTicketProps): number {
    if (!workCoefficient) throw new Error('Invalid work shift!');

    if (employeePosition === 'operario' && workCoefficient >= 25) {
      const mealTicket = grossSalary / 2;

      return Number(mealTicket.toFixed(2));
    }
    const mealTicket = grossSalary / 3;
    return Number(mealTicket.toFixed(2));
  }
}
