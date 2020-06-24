import React from 'react';
import './styles.scss';
import { observer, inject } from 'mobx-react';

export const Board = inject('game')(
  observer(({ game, onReset }) => {
    const { board, winner } = game;
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
                {cell !== null ? cell : '-'}
              </div>
            ))}
          </div>
        ))}
        {winner && (
          <div>
            {<p>{`${winner} wins! 🥳 `}</p>}
            <button onClick={onReset}>Play Again!</button>
          </div>
        )}
      </div>
    );
  })
);
