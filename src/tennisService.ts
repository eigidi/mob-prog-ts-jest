class Service {
  player1: {
    name: string,
    score: string
  } = {
    name: "Player One",
    score: "0",
  };
  player2: {
    name: string,
    score: string
  } = {
    name: "Player Two",
    score: "0",
  };

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
    if(this.winner) {
      return `${this.winner} wins`;
    }

    if(this.advantage) {
      return `Advantage ${this.advantage}`;
    }

    if(this.player1.score === this.player2.score){

      if(this.player1.score === "40"){
        return "Deuce"
      }

      return `${scoreMapper[this.player1.score]} all`
    }
    
    return `${scoreMapper[this.player1.score]}, ${scoreMapper[this.player2.score]}`;
  }

  getStatus(status: string) {
    if(this.player1.score === status) {
      return this.player1.name;
    }
    if(this.player2.score === status) {
      return this.player2.name;
    }

    return null; 
  }

  get winner(){
    return this.getStatus("W"); 
  }

  get advantage(){
    return this.getStatus("AD"); 
  }

  setScore(scores: string[]) {
    const [player1, player2] = scores;

    this.player1.score = player1;
    this.player2.score = player2;
  }
}

const scoreMapper: {[key: string]: string} = {
  "0": "Love",
  "15": "Fifteen",
  "30": "Thirty",
  "40": "Forty",
}

export default new Service();
