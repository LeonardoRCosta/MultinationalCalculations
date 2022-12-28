export class GetWorkCoefficient {
  static execute(workShift: string): number {
    const workCoefficient = {
      matutino: 0.13,
      vespertino: 0.04,
      noturno: 0.08,
    }[workShift];

    if (!workCoefficient) throw new AppError('Invalid work shift!');

    return workCoefficient;
  }
}
