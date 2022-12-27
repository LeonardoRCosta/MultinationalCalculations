import { CalculateMealTicket } from './CalculateMealTicket';

describe('Calculate meal ticket', () => {
  it('should be able to calculate the meal ticket based on the employee position & the work coefficient', () => {
    expect(
      CalculateMealTicket.execute({
        employeePosition: 'operario',
        workCoefficient: 28,
        grossSalary: 1200,
      })
    ).toEqual(600);

    expect(
      CalculateMealTicket.execute({
        employeePosition: 'gerente',
        workCoefficient: 28,
        grossSalary: 1200,
      })
    ).toEqual(400);

    expect(
      CalculateMealTicket.execute({
        employeePosition: 'operario',
        workCoefficient: 18,
        grossSalary: 1200,
      })
    ).toEqual(400);
  });

  it('should be able to throw an error if the work shift does not exist', () => {
    expect(() =>
      CalculateMealTicket.execute({
        employeePosition: 'operario',
        workCoefficient: undefined,
        grossSalary: 1200,
      })
    ).toThrowError();
  });
});
