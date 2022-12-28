import { IntlFormatter } from './IntlFormatter';

describe('Formatting a number', () => {
  it('should be able transform a number to a currency BRL string if the style passed is currency', () => {
    expect(IntlFormatter.execute({ number: 500, style: 'currency' })).toEqual(
      Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
        500
      )
    );
  });

  it('should be able transform a number to percent if the styled passed is percent', () => {
    expect(IntlFormatter.execute({ number: 0.25, style: 'percent' })).toEqual(
      '25%'
    );
  });

  it('should be able to throw an error if the styled passed is neither percent nor currency', () => {
    expect(() =>
      IntlFormatter.execute({ number: 123, style: 'invalidStyle' })
    ).toThrowError();
  });
});
