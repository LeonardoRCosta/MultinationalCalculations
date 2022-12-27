import { CalculateTaxRate } from './CalculateTaxRate';

describe('Calculate the tax rate', () => {
  let calculateTaxRate: CalculateTaxRate;

  beforeEach(() => {
    calculateTaxRate = new CalculateTaxRate();
  });

  it('should be able to calculate the tax rate based on the gross salary', () => {
    expect(
      calculateTaxRate.execute({
        employeePosition: 'operario',
        grossSalary: 900,
      })
    ).toEqual(0.07);

    expect(
      calculateTaxRate.execute({
        employeePosition: 'operario',
        grossSalary: 1000,
      })
    ).toEqual(0.13);

    expect(
      calculateTaxRate.execute({
        employeePosition: 'gerente',
        grossSalary: 1600,
      })
    ).toEqual(0.15);

    expect(
      calculateTaxRate.execute({
        employeePosition: 'gerente',
        grossSalary: 1450,
      })
    ).toEqual(0.1);
  });

  it('should return undefined if the employee position does not exist', () => {
    expect(
      calculateTaxRate.execute({
        employeePosition: 'invalid employee position',
        grossSalary: 1450,
      })
    ).toBeUndefined();
  });
});
