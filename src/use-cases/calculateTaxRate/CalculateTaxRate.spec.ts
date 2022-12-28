import { AppError } from '../../errors/AppError';
import { CalculateTaxRate } from './CalculateTaxRate';

describe('Calculate the tax rate', () => {
  it('should be able to calculate the tax rate based on the gross salary', () => {
    expect(
      CalculateTaxRate.execute({
        employeePosition: 'operario',
        grossSalary: 900,
      })
    ).toEqual(0.07);

    expect(
      CalculateTaxRate.execute({
        employeePosition: 'operario',
        grossSalary: 1000,
      })
    ).toEqual(0.13);

    expect(
      CalculateTaxRate.execute({
        employeePosition: 'gerente',
        grossSalary: 1600,
      })
    ).toEqual(0.15);

    expect(
      CalculateTaxRate.execute({
        employeePosition: 'gerente',
        grossSalary: 1450,
      })
    ).toEqual(0.1);
  });

  it('should be able to throw an error if the employee position does not exist', () => {
    expect(async () =>
      CalculateTaxRate.execute({
        employeePosition: 'invalid employee position',
        grossSalary: 1450,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
