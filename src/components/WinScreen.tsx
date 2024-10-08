import styles from '../styles/WinScreen.module.css'

interface winScreenProps{
    language: string;
    score: number;
    reset: () => void;
    changeBestScore: (score:number) => void;
}

export function WinScreen({language, score, reset, changeBestScore}: winScreenProps){
    console.log(score)
    changeBestScore(score);

    return (
        <div className={`${styles.winScreen} ${styles.blur}`}>
          <div className={styles.sine}>
            <h1 className={styles.winScreen}>
              {language === 'en-us' ? 'You found the fox!' : 'Você encontrou a raposa!'}
            </h1>
          </div>
          <button className={styles.winScreen} type='button' onClick={reset}>
            {language === 'en-us' ? 'Restart' : 'Reiniciar'}
          </button>
        </div>
      );
}