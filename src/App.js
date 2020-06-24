import React from 'react';
import { Board } from './components/board/Board';
import './App.scss';
import { Provider, Observer } from 'mobx-react';
import Game from './models/game';

const game = new Game(4);

function App() {
  return (
    <Provider game={game}>
      <div>
        <Board />
      </div>
    </Provider>
  );
}

export default App;
