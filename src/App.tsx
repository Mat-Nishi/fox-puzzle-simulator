import { useEffect, useState } from 'react';
import styles from './styles/App.module.css';
import './styles/index.css';
import Holes from './components/Holes';
import { GameInfo } from './components/GameInfo';
import { WinScreen } from './components/WinScreen';
import RotateWarning from './components/RotateWarning';

const preloadImage = (url: string): Promise<void> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = url;

    img.onload = () => resolve();
    img.onerror = (err) => reject(err);
  });
};

function App() {
  const holes = 5;
  const backgroundImageUrl = '../assets/bg_fox.png';
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [positions, setPositions] = useState<number[]>(new Array(holes).fill(1));
  const [movesMade, setMovesMade] = useState<number>(0);
  const [foxesFound, setFoxesFound] = useState<number>(0);
  const [runningChance, setRunningChance] = useState<number>(0);
  const [isPortrait, setIsPortrait] = useState<boolean>(window.innerHeight > window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    preloadImage(backgroundImageUrl)
      .then(() => {
        setIsLoading(false);
        document.body.style.backgroundImage = `url(${backgroundImageUrl})`;
      })
      .catch((error) => {
        console.error('Failed to load the background image:', error);
        setIsLoading(false);
      });
  }, []);

  const resetGame = () => {
    setRunningChance(0);
    setFoxesFound(0);
    setMovesMade(0);
    setPositions(new Array(holes).fill(1));
  };

  const updatePositions = (newPositions: number[]) => {
    setPositions(newPositions);
    setMovesMade(movesMade + 1);
    const newFoxesFound = newPositions.reduce((acc, cur) => acc + (cur === 0 ? 1 : 0), 0);
    setFoxesFound(foxesFound + newFoxesFound);
  };

  const updateOdds = (chance: number) => {
    setRunningChance(runningChance + ((1 - runningChance) * chance));
  };

  const totalFoxesLeft = positions.reduce((acc, cur) => acc + cur, 0);

  return (
    <div className={styles.appContainer}>
      {isPortrait ? (
        <RotateWarning />
      ) : (
        isLoading ? (
          <div className={styles.loader} />
        ) : (
          runningChance < 1 ? (
            <div className={styles.gameContainer}>
              <h1 className={styles.title}>Fox Puzzle Game</h1>
              <Holes positions={positions} holes={holes} onUpdatePositions={updatePositions} onUpdateOdds={updateOdds} />
              <GameInfo movesMade={movesMade} foxesLeft={totalFoxesLeft} foxesFound={foxesFound} runningChance={runningChance} />
            </div>
          ) : (
            <WinScreen reset={resetGame} />
          )
        )
      )}
    </div>
  );
}

export default App;
