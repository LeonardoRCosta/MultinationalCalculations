import { AppError } from '../../errors/AppError';
import { FixDecimalCases } from '../../utils/FixDecimalCases';

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
    if (!workCoefficient) throw new AppError('Invalid work shift!');

    const mealTicket =
      employeePosition === 'operario' && workCoefficient >= 25
        ? grossSalary / 2
        : grossSalary / 3;

    return FixDecimalCases.execute({
      desiredDecimalCases: 2,
      number: mealTicket,
    });
  }
}
