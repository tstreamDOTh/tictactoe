import React from 'react';
import logo from './logo.svg';
import { Board } from './components/board/Board';
import './App.scss';
import { Provider, Observer } from 'mobx-react';
import Game from './models/game';

const game = new Game(4);

const ObserverBoard = Observer(Board);

function App() {
  return (
    <Provider game={game}>
      <div>
        <ObserverBoard />
      </div>
    </Provider>
  );
}

export default App;
