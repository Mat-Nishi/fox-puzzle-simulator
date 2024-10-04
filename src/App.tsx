import { useState } from 'react';
import './App.css';
import Holes from './components/Holes';
import { GameInfo } from './components/GameInfo';

function App() {
  const [positions, setPositions] = useState<number[]>([1, 1, 1, 1, 1]);
  const [movesMade, setMovesMade] = useState<number>(0);
  const [foxesFound, setFoxesFound] = useState<number>(0);

  const updatePositions = (newPositions: number[]) => {
    setPositions(newPositions);
    setMovesMade(movesMade + 1); // Increment moves made
    const newFoxesFound = newPositions.reduce((acc, cur) => acc + (cur === 0 ? 1 : 0), 0);
    setFoxesFound(foxesFound + newFoxesFound);
  };

  const totalFoxesLeft = positions.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className='appContainer'>
      <h1 className='title'>Fox Puzzle Game</h1>
      <Holes positions={positions} onUpdatePositions={updatePositions} />
      <GameInfo movesMade={movesMade} foxesLeft={totalFoxesLeft} foxesFound={foxesFound} />
    </div>
  );
}

export default App;
