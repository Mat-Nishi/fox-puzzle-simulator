import styles from '../styles/GameInfo.module.css';

interface GameInfoProps {
    movesMade: number;
    foxesLeft: number;
    foxesFound: number;
    runningChance: number;
    language: string;
  }
  
  export function GameInfo({ movesMade, runningChance, language }: GameInfoProps) {
    return (
      <div className={styles.gameInfo}>
        {language === 'en-us' ? (
          <>
            <h2>Game Info</h2>
            <p>Moves made: {movesMade}</p>
            {runningChance === 1 || runningChance < 0.9999 ? (
              <p>Odds of winning: {(runningChance * 100).toFixed(2)}%</p>
            ) : (
              <p>Odds of winning: 99.99%</p>
            )}
          </>
        ) : (
          <>
            <h2>Informações</h2>
            <p>Jogadas feitas: {movesMade}</p>
            {runningChance === 1 || runningChance < 0.9999 ? (
              <p>Chance de vitória: {(runningChance * 100).toFixed(2)}%</p>
            ) : (
              <p>Chance de vitória: 99.99%</p>
            )}
          </>
        )}
      </div>
    );
    
  }
  