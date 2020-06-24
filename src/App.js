import React, { useState } from 'react';
import './App.scss';
import { Provider } from 'mobx-react';
import Game from './models/game';
import { NewGame } from './pages/newgame/NewGame';
import { GamePlay } from './pages/gameplay/GamePlay';

const game = new Game(3);

function App() {
  const [isGameStarted, setIsGameStarted] = useState(false);
  return (
    <Provider game={game}>
      {isGameStarted && (
        <GamePlay
          onReset={() => {
            setIsGameStarted(false);
          }}
        />
      )}
      {!isGameStarted && (
        <NewGame
          onStart={() => {
            setIsGameStarted(true);
          }}
        />
      )}
    </Provider>
  );
}

export default App;
