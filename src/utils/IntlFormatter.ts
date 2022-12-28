interface IIntlProps {
  number: number;
  style: string;
}

export class IntlFormatter {
  static execute({ number, style }: IIntlProps): string {
    if (style !== 'currency' && style !== 'percent')
      throw new AppError(
        'Invalid style! Possible values: "currency", "percent"'
      );

    return style === 'currency'
      ? Intl.NumberFormat('pt-BR', {
          style,
          currency: 'BRL',
        }).format(number)
      : Intl.NumberFormat('pt-BR', { style }).format(number);
  }
}
