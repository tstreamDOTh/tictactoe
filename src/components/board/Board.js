import React from 'react';
import './styles.scss';
import { observer, inject } from 'mobx-react';

export const Board = inject('game')(
  observer(({ game }) => {
    const { board } = game;

    return (
      <div className={'board'}>
        {board.map((row, i) => (
          <div className={'row'}>
            {row.map((cell, j) => (
              <div
                className={`cell ${cell}`}
                onClick={function onPlay() {
                  game.setMark(i, j);
                }}>
                {cell}
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  })
);
