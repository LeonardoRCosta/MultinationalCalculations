import { GetWorkCoefficient } from './GetWorkCoefficient';

interface ICalculationData {
  workedHours: number;
  workShift: string;
}

export class CalculateGrossSalary {
  constructor(
    private getWorkCoefficient: GetWorkCoefficient,
    private minSalary: number
  ) {}

  execute({ workedHours, workShift }: ICalculationData) {
    const coefficient = this.getWorkCoefficient.execute(workShift);

    if (!coefficient) throw new Error('Invalid work shift!');

    return workedHours * (coefficient * this.minSalary);
  }
}
