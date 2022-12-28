import { AppError } from '../../errors/AppError';
import { FixDecimalCases } from '../../utils/FixDecimalCases';

export class GetWorkCoefficient {
  static execute(workShifts: string[]): number {
    const workCoefficients: Record<string, number> = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    };

    const workCoefficient = workShifts.reduce((workCoefficient, shift) => {
      if (!workCoefficients[shift]) throw new AppError('Invalid work shift');

      return (workCoefficient += workCoefficients[shift]);
    }, 0);

    return FixDecimalCases.execute({
      desiredDecimalCases: 2,
      number: workCoefficient,
    });
  }
}
