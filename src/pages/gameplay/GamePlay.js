import React, { useState } from 'react';
import { Board } from '../../components/board/Board';

export const GamePlay = ({ board, onReset }) => {
  return (
    <>
      <Board onReset={onReset} />
    </>
  );
};
