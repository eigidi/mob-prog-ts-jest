import tennisService from './tennisService';

describe('Tennis score', () => {

  test('should return Deuce', () => {
    expect(tennisService.getScore()).toBe("Deuce");
  });
});
