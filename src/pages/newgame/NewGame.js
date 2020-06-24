import React, { useState } from 'react';
import { observer, inject } from 'mobx-react';
import './styles.scss';

export const NewGame = inject('game')(
  observer(({ game, onStart }) => {
    const [size, setSize] = useState(2);
    return (
      <>
        <h1>NxN Tic Tac Toe</h1>
        <div className={'controls'}>
          <input
            type='number'
            min={2}
            step={1}
            value={size}
            onChange={(event) => {
              setSize(Number(event.target.value));
            }}
          />
          <button
            onClick={(e) => {
              game.resetGame(size);
              onStart();
            }}>
            Play
          </button>
        </div>
      </>
    );
  })
);
