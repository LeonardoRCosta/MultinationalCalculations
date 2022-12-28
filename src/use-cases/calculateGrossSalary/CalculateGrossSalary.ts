import { AppError } from '../../errors/AppError';

interface ICalculationData {
  workedHours: number;
  workCoefficient: number;
  minSalary: number;
}

export class CalculateGrossSalary {
  constructor() {}

  static execute({
    workedHours,
    workCoefficient,
    minSalary,
  }: ICalculationData) {
    if (workedHours <= 0 || workedHours >= 721)
      throw new AppError('Invalid worked hours!');

    const grossSalary = workedHours * (workCoefficient * minSalary);

    return Number(grossSalary.toFixed(2));
  }
}
