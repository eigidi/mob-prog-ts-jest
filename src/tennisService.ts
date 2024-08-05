class Service {
  /**
   * Write a program that implements a simple tennis-style scoring announcements system.
   * A game is won by the first player to have won at least four points in total and at least two points more than the opponent.
   * Scores from zero to three points are described as “love”, “fifteen”, “thirty”, and “forty” respectively.
   * If at least three points have been scored by each player and the scores are equal, the score is “deuce”.
   * If at least three points have been scored by each player and a player has one more point than his opponent, the score is “advantage” for the player in the lead.
   * Note: State is maintained. 
 * @example
 * If the score is 0-0, getScore will return "Love all"
 * If the score is 15-15, getScore will return "Fifteen all"
 * If the score is 30-15, getScore will return "Thirty,Fifteen"
 * If Player one has an advantage, then getScore will return "Advantage Player One"
 * If Player one has won, then getScore will return "Player One wins"
 */
  getScore(): any {
    return "Deuce";
  }
}

export default new Service();
