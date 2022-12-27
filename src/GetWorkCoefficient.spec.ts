import { GetWorkCoefficient } from './GetWorkCoefficient';

describe('Get the work coefficient', () => {
  it('should be able to return the right work coefficient', () => {
    expect(GetWorkCoefficient.execute('matutino')).toEqual(0.13);
    expect(GetWorkCoefficient.execute('vespertino')).toEqual(0.04);
    expect(GetWorkCoefficient.execute('noturno')).toEqual(0.08);
  });

  it('should be able to throw an error if the work shift does not exist', () => {
    expect(() => GetWorkCoefficient.execute('invalidWorkshift')).toThrowError();
  });
});
