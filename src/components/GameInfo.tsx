import '../styles/GameInfo.css';

interface GameInfoProps {
    movesMade: number;
    foxesLeft: number;
    foxesFound: number;
    runningChance: number;
  }
  
  export function GameInfo({ movesMade, runningChance }: GameInfoProps) {
    console.log(runningChance);
    return (
      <div className="game-info">
        <h2>Game Information</h2>
        <p>Moves Made: {movesMade}</p>
        {runningChance === 1 || runningChance < 0.9999? 
        <p>Odds of winning: {(runningChance*100).toFixed(2)}%</p>
      : <p>Odds of winning: 99.99%</p>}
      </div>  
    );
  }
  