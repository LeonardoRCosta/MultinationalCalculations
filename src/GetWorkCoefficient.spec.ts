import { GetWorkCoefficient } from './GetWorkCoefficient';

describe('Get the work coefficient', () => {
  let getWorkCoefficient: GetWorkCoefficient;

  beforeEach(() => {
    getWorkCoefficient = new GetWorkCoefficient();
  });

  it('should be able to return the right work coefficient', () => {
    expect(getWorkCoefficient.execute('matutino')).toEqual(0.13);
    expect(getWorkCoefficient.execute('vespertino')).toEqual(0.04);
    expect(getWorkCoefficient.execute('noturno')).toEqual(0.08);
  });

  it('should return undefined if the work shift does not exist', () => {
    expect(getWorkCoefficient.execute('invalidWorkshift')).toEqual(undefined);
  });
});
