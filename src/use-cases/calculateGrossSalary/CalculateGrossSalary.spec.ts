import { AppError } from '../../errors/AppError';
import { CalculateGrossSalary } from './CalculateGrossSalary';

describe('Calculate the gross salary', () => {
  it('should be able to calculate the gross salary', () => {
    const grossSalary = CalculateGrossSalary.execute({
      workedHours: 80,
      workCoefficient: 0.08,
      minSalary: 1000,
    });

    expect(grossSalary).toEqual(6400);
  });

  it('should be able to throw an error if the worked hours are less than or equal to 0', () => {
    expect(async () =>
      CalculateGrossSalary.execute({
        workedHours: -10,
        workCoefficient: 0.13,
        minSalary: 1000,
      })
    ).rejects.toBeInstanceOf(AppError);
  });

  it('should be able to throw an error if the worked hours are greater than or equal to 721', () => {
    expect(async () =>
      CalculateGrossSalary.execute({
        workedHours: 721,
        workCoefficient: 0.13,
        minSalary: 1000,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
