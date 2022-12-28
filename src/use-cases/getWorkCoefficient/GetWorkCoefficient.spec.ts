import { AppError } from '../../errors/AppError';
import { GetWorkCoefficient } from './GetWorkCoefficient';

describe('Get the work coefficient', () => {
  it('should be able to return the right work coefficient', () => {
    expect(GetWorkCoefficient.execute(['matutino'])).toEqual(0.13);

    expect(GetWorkCoefficient.execute(['matutino', 'vespertino'])).toEqual(0.17);

    expect(GetWorkCoefficient.execute(['vespertino'])).toEqual(0.04);

    expect(GetWorkCoefficient.execute(['vespertino', 'noturno'])).toEqual(0.12);

    expect(GetWorkCoefficient.execute(['noturno'])).toEqual(0.08);

    expect(GetWorkCoefficient.execute(['noturno', 'matutino'])).toEqual(0.21);

    expect(GetWorkCoefficient.execute(['noturno', 'matutino', 'vespertino'])).toEqual(0.25);
  });

  it('should be able to throw an error if the work shift does not exist', () => {
    expect(async () =>
      GetWorkCoefficient.execute(['invalidWorkshift'])
    ).rejects.toBeInstanceOf(AppError);
  });
});
