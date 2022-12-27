import { CalculateGrossSalary } from './CalculateGrossSalary';
import { GetWorkCoefficient } from './GetWorkCoefficient';

describe('Calculate the gross salary', () => {
  let getWorkCoefficient: GetWorkCoefficient;
  let calculateGrossSalary: CalculateGrossSalary;

  beforeEach(() => {
    getWorkCoefficient = new GetWorkCoefficient();
    calculateGrossSalary = new CalculateGrossSalary(getWorkCoefficient, 1000);
  });

  it('should be able to calculate the gross salary', () => {
    const grossSalary = calculateGrossSalary.execute({
      workedHours: 80,
      workShift: 'noturno',
    });

    expect(grossSalary).toEqual(6400);
  });

  it('should be able to throw an error if the workshift passed is not valid', () => {
    expect(
      calculateGrossSalary.execute({
        workedHours: 80,
        workShift: 'invalidWorkshift',
      })
    ).toThrowError();
  });
});
