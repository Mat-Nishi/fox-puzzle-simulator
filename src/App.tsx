import { useEffect, useState } from 'react';
import styles from './styles/App.module.css';
import './styles/index.css';
import Holes from './components/Holes';
import { GameInfo } from './components/GameInfo';
import { WinScreen } from './components/WinScreen';
import RotateWarning from './components/RotateWarning';
import { Header } from './components/Header';
import { RulesScreen } from './components/RulesScreen';
import { SettingsScreen } from './components/SettingsScreen';

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
  const [rulesScreen, setRulesScreen] = useState<boolean>(false);
  const [settingsScreen, setSettingsScreen] = useState<boolean>(false);
  const [language, setLanguage] = useState<string>('pt-br');
  const [bestScore, setBestScore] = useState<number>(10000);
  const [showPercent, setShowPercent] = useState<boolean>(false);

  const changeLanguage = (language: string) =>{
    setLanguage(language);
  }

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
    const storedBestScore = localStorage.getItem('bestScore');
    console.log("buscando: ", storedBestScore)
    setBestScore(Number(storedBestScore));
  }, []);

  useEffect(() => {
    localStorage.setItem('bestScore', String(bestScore));
  }, [bestScore]);

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

  const newBestScore = (score: number) => {
    if (Number.isNaN(bestScore) || score < bestScore){
      setBestScore(score);
    }
  }

  const updatePositions = (newPositions: number[]) => {
    setPositions(newPositions);
    setMovesMade(movesMade + 1);
    const newFoxesFound = newPositions.reduce((acc, cur) => acc + (cur === 0 ? 1 : 0), 0);
    setFoxesFound(foxesFound + newFoxesFound);
  };

  const updateOdds = (chance: number) => {
    setRunningChance(runningChance + ((1 - runningChance) * chance));
  };

  const closeModal = () => {
    setRulesScreen(false);
    setSettingsScreen(false);
  }

  const openRules = () => {
    setRulesScreen(true);
  }

  const openSettings = () => {
    setSettingsScreen(true);
  }

  const toggleShowPercent = () =>{
    setShowPercent(!showPercent);
  }

  const totalFoxesLeft = positions.reduce((acc, cur) => acc + cur, 0);

  return (
    <div>
      {isLoading ? (
        <div className={styles.loader} />
      ) : (
        isPortrait ? (
          <RotateWarning language={language} />
        ) : (
          <>
            <Header language={language} settingsButton={openSettings} rulesButton={openRules} />
            {!settingsScreen ? (
              !rulesScreen ? (
                runningChance < 1 ? (
                  <div className={styles.appContainer}>
                    <div className={styles.gameContainer}>
                      <div className={styles.titleHolesWrapper}>
                        {language === 'en-us' ? (
                          <p className={styles.title}>Click on the hole to find the fox</p>
                        ) : (
                          <p className={styles.title}>Clique na toca para procurar a raposa</p>
                        )}
  
                        <Holes
                          language={language}
                          showPercent={showPercent}
                          positions={positions}
                          holes={holes}
                          onUpdatePositions={updatePositions}
                          onUpdateOdds={updateOdds}
                        />
                      </div>
                      <GameInfo
                        bestScore={bestScore}
                        language={language}
                        movesMade={movesMade}
                        foxesLeft={totalFoxesLeft}
                        foxesFound={foxesFound}
                        runningChance={runningChance}
                      />
                    </div>
                  </div>
                ) : (
                  <div>
                    <WinScreen language={language} score={movesMade} reset={resetGame} changeBestScore={newBestScore}/>
                  </div>
                )
              ) : (
                <RulesScreen language={language} onClose={closeModal} />
              )
            ) : (
              <SettingsScreen
                language={language}
                showPercent={showPercent}
                toggleShowPercent={toggleShowPercent}
                changeLanguage={changeLanguage}
                onClose={closeModal}
              />
            )}
          </>
        )
      )}
    </div>
  );
  
}

export default App;
