import { AppError } from '../../errors/AppError';
import { GetRandomNumber } from '../../utils/GetRandomNumber';

export class CalculateMinSalary {
  static execute(employeePosition: string): number {
    const minSalary = {
      operario: GetRandomNumber.execute(750, 2500),
      gerente: GetRandomNumber.execute(1400, 4600),
    }[employeePosition];

    if (!minSalary) throw new AppError('Invalid employee position!');

    return minSalary;
  }
}
