interface ICalculateBonusProps {
  workShifts: string[];
  workedHours: number;
}

export class CalculateBonus {
  static execute({ workShifts, workedHours }: ICalculateBonusProps): number {
    return workShifts.includes('matutino') && workedHours > 80 ? 1200.0 : 465.0;
  }
}
