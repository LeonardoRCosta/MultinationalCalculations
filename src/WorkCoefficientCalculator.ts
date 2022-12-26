export class WorkCoefficientCalculator {
  execute(workShift: string) {
    return {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    }[workShift];
  }
}
