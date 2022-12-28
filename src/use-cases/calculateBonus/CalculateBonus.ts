interface ICalculateBonusProps {
  workShift: string;
  workedHours: number;
}

export class CalculateBonus {
  static execute({ workShift, workedHours }: ICalculateBonusProps): number {
    return workShift === 'matutino' && workedHours > 80 ? 1200.0 : 465.0;
  }
}
