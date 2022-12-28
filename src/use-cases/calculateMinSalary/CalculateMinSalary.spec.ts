import { AppError } from '@errors/AppError';
import { CalculateMinSalary } from './CalculateMinSalary';

describe('Calculate the minimum salary', () => {
  it('should be able to calculate the minimum salary based on the employee position', () => {
    expect(CalculateMinSalary.execute('operario')).toBeLessThanOrEqual(2500);
    expect(CalculateMinSalary.execute('operario')).toBeGreaterThanOrEqual(750);

    expect(CalculateMinSalary.execute('gerente')).toBeLessThanOrEqual(4600);
    expect(CalculateMinSalary.execute('gerente')).toBeGreaterThanOrEqual(1400);
  });

  it('should be able to throw an error if the passed employee position does not exist', () => {
    expect(async () =>
      CalculateMinSalary.execute('invalidPosition')
    ).rejects.toBeInstanceOf(AppError);
  });
});
