import { CalculateBonus } from './CalculateBonus';

describe('Calculate bonus', () => {
  it('should be able to calculate the right bonus based on the working shift & the worked hours', () => {
    expect(
      CalculateBonus.execute({ workShifts: ['matutino'], workedHours: 85 })
    ).toEqual(1200);

    expect(
      CalculateBonus.execute({ workShifts: ['noturno'], workedHours: 85 })
    ).toEqual(465);

    expect(
      CalculateBonus.execute({ workShifts: ['matutino'], workedHours: 65 })
    ).toEqual(465);
  });
});
