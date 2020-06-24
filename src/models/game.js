import { X, O } from './constants';
import { observable, computed, action } from 'mobx';

// const sampleMarks = [['X', null, 'X'],[('X', null, null)],[(null, null, 'X')]];

export default class Game {
  @observable size;
  @observable winner;
  @observable board;
  @observable activePlayerMark;

  constructor(size) {
    this.size = size;
    this.board = Array(this.size).fill(Array(this.size).fill(null));
    this.activePlayerMark = X;
    this.winner = null;
  }

  @action.bound
  resetGame(size) {
    this.size = size;
    this.board = Array(this.size).fill(Array(this.size).fill(null));
    this.activePlayerMark = X;
    this.winner = null;
  }

  @action.bound
  setMark(i, j) {
    console.log(this.size);
    this.board[i][j] = this.activePlayerMark;
    this.activePlayerMark = this.activePlayerMark === X ? O : X;
    this.checkWinner();
  }

  checkWinner() {
    //Check rows
    this.board.map((row, i) => {
      if (new Set(row).size === 1 && row[0] !== null) {
        this.winner = row[0];
        return;
      }
    });

    //TODO Check columns

    //Check Diagnols

    var d1Set = [];
    var d2Set = [];

    this.board.map((row, i) => {
      row.map((cell, j) => {
        if (i === j) {
          d1Set.push(cell);
        }
        if (i === row.length - j - 1) {
          d2Set.push(cell);
        }
      });
    });

    if (new Set(d1Set).size === 1 && d1Set[0] !== null) {
      this.winner = d1Set[0];
      return;
    }

    if (new Set(d2Set).size === 1 && d2Set[0] !== null) {
      this.winner = d2Set[0];
      return;
    }
  }
}
