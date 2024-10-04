interface GameInfoProps {
    movesMade: number;
    foxesLeft: number;
    foxesFound: number;
  }
  
  export function GameInfo({ movesMade, foxesLeft, foxesFound }: GameInfoProps) {
    return (
      <div className="game-info">
        <h2>Game Information</h2>
        <p>Moves Made: {movesMade}</p>
        <p>Foxes Left: {foxesLeft}</p>
        <p>Foxes Found: {foxesFound}</p>
      </div>
    );
  }
  