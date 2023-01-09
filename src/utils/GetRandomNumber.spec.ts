import { GetRandomNumber } from './GetRandomNumber';
describe('Getting a random number', () => {
  it('should be able to return a random number between the max & the min value passed', () => {
    const randomNumber = GetRandomNumber.execute(100, 200);

    expect(randomNumber).toBeGreaterThanOrEqual(100);
    expect(randomNumber).toBeLessThanOrEqual(200);
  });
});
