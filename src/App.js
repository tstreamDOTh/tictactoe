import React from 'react';
import { Board } from './components/board/Board';
import './App.scss';
import { Provider, Observer } from 'mobx-react';
import Game from './models/game';

const game = new Game(3);

function App() {
  return (
    <Provider game={game}>
        <Board />
    </Provider>
  );
}

export default App;
