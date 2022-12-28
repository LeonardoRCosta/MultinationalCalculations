interface IFixDecimalCasesProps {
  desiredDecimalCases: number;
  number: number;
}

export class FixDecimalCases {
  static execute({ desiredDecimalCases, number }: IFixDecimalCasesProps) {
    return Number(number.toFixed(desiredDecimalCases));
  }
}
