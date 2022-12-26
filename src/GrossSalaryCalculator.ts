import { WorkCoefficientCalculator } from './WorkCoefficientCalculator';

interface ICalculationData {
  workedHours: number;
  workShift: string;
}

export class GrossSalaryCalculator {
  constructor(private workCoefficientCalculator: WorkCoefficientCalculator) {}

  execute({ workedHours, workShift }: ICalculationData) {
    const coefficient = this.workCoefficientCalculator.execute(workShift);

    if (!coefficient) throw new Error('Invalid work shift!');

    return workedHours * coefficient;
  }
}
