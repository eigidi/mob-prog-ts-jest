import tennisService from './tennisService';

describe('Tennis score', () => {

  test('should return Love all when score is 0-0', () => {
    expect(tennisService.getScore()).toBe("Love all");
  });

  test('should return Fifteen all when score is 15-15', () => {
    tennisService.setScore(["15", "15"]);

    expect(tennisService.getScore()).toBe("Fifteen all");
  });

  test('should return Love, Fifteen when score is 0-15', () => {
    tennisService.setScore(["0", "15"]);

    expect(tennisService.getScore()).toBe("Love, Fifteen");
  });

  test('should return Deuce when score is 40-40', () => {
    tennisService.setScore(["40", "40"]);

    expect(tennisService.getScore()).toBe("Deuce");
  });

  test('should return AD-40 when score is AD-40', () => {
    tennisService.setScore(["AD", "40"]);

    expect(tennisService.getScore()).toBe("Advantage Player One");
  });

  test('should return 40-AD when score is 40-AD', () => {
    tennisService.setScore(["40", "AD"]);

    expect(tennisService.getScore()).toBe("Advantage Player Two");
  });

  test('should return Player One wins', () => {
    tennisService.setScore(["W", "30"]);

    expect(tennisService.getScore()).toBe("Player One wins");
  });

  test('should return Player Two wins', () => {
    tennisService.setScore(["30", "W"]);

    expect(tennisService.getScore()).toBe("Player Two wins");
  });
});