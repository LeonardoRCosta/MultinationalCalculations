import { WorkCoefficientCalculator } from './WorkCoefficientCalculator';

describe('Calculate the work coefficient', () => {
  let workCoefficientCalculator: WorkCoefficientCalculator;

  beforeEach(() => {
    workCoefficientCalculator = new WorkCoefficientCalculator();
  });

  it('should be able to return the right work coefficient', () => {
    expect(workCoefficientCalculator.execute('matutino')).toEqual(0.13);
    expect(workCoefficientCalculator.execute('vespertino')).toEqual(0.04);
    expect(workCoefficientCalculator.execute('noturno')).toEqual(0.08);
  });

  it('should return undefined if the work shift does not exist', () => {
    expect(workCoefficientCalculator.execute('invalidWorkshift')).toEqual(
      undefined
    );
  });
});
