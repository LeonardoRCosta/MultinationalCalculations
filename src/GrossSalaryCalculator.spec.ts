import { GrossSalaryCalculator } from './GrossSalaryCalculator';
import { WorkCoefficientCalculator } from './WorkCoefficientCalculator';

describe('Calculate the gross salary', () => {
  let workCoefficientCalculator: WorkCoefficientCalculator;
  let grossSalaryCalculator: GrossSalaryCalculator;

  beforeEach(() => {
    workCoefficientCalculator = new WorkCoefficientCalculator();
    grossSalaryCalculator = new GrossSalaryCalculator(
      workCoefficientCalculator,
      1000
    );
  });

  it('should be able to calculate the gross salary', () => {
    const grossSalary = grossSalaryCalculator.execute({
      workedHours: 80,
      workShift: 'noturno',
    });

    expect(grossSalary).toEqual(6400);
  });

  it('should be able to throw an error if the workshift passed is not valid', () => {
    expect(() => {
      grossSalaryCalculator.execute({
        workedHours: 80,
        workShift: 'invalidWorkshift',
      });
    }).toThrowError();
  });
});
