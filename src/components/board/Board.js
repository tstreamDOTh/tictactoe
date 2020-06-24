import React from 'react';
import './styles.scss';

export const Board = ({ game }) => {
  const { board } = game;
  return (
    <div className={'board'}>
      {board.map((row) => (
        <div className={'row'}>
          {row.map((cell) => (
            <div className={`cell ${cell}`}> {cell} </div>
          ))}
        </div>
      ))}
    </div>
  );
};
