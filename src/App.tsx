import { useState } from 'react';
import './styles/App.css';
import Holes from './components/Holes';
import { GameInfo } from './components/GameInfo';

function App() {
  const holes=5;
  const [positions, setPositions] = useState<number[]>(new Array(holes).fill(1));
  const [movesMade, setMovesMade] = useState<number>(0);
  const [foxesFound, setFoxesFound] = useState<number>(0);
  const [runningChance, setRunningChance] = useState<number>(0);

  const updatePositions = (newPositions: number[]) => {

    setPositions(newPositions);
    setMovesMade(movesMade + 1);
    const newFoxesFound = newPositions.reduce((acc, cur) => acc + (cur === 0 ? 1 : 0), 0);
    setFoxesFound(foxesFound + newFoxesFound);
  };

  const updateOdds = (chance: number) => {
    setRunningChance(runningChance + ((1-runningChance)*chance));
  }

  const totalFoxesLeft = positions.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className='appContainer'>
      <h1 className='title'>Fox Puzzle Game</h1>
      <Holes positions={positions} holes={holes} onUpdatePositions={updatePositions} onUpdateOdds = {updateOdds} />
      <GameInfo movesMade={movesMade} foxesLeft={totalFoxesLeft} foxesFound={foxesFound} runningChance={runningChance}/>
    </div>
  );
}

export default App;
