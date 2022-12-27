interface ICalculateBonusProps {
  workShift: string;
  workedHours: number;
}

export class CalculateBonus {
  static execute({ workShift, workedHours }: ICalculateBonusProps): number {
    if (workShift === 'matutino' && workedHours > 80) return 1200.0;

    return 465.0;
  }
}
