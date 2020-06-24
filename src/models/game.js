import { X, O } from './constants';
import { observable, action } from 'mobx';

// const sampleMarks = [['X', '-', 'X'],[('X', '-', '-')],[('-', '-', 'X')]];

export default class Game {
  @observable size;
  @observable board;
  @observable activePlayerMark;

  constructor(size = 3) {
    this.size = size;
    this.board = Array(this.size).fill(Array(this.size).fill('-'));
    this.activePlayerMark = X;
  }

  @action.bound
  setMark(i, j) {
    this.board[i][j] = this.activePlayerMark;
    this.activePlayerMark = this.activePlayerMark === X ? O : X;
  }

  //TODO winning condition
  checkForWinner() {}
}
