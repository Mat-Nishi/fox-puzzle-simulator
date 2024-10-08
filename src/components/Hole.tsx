import holeImage from '../assets/hole.svg';
import styles from '../styles/Hole.module.css'

interface HoleProps{
    showPercent: boolean;
    index: number;
    odds: number;
    language: string;
    handleClick: (index: number) => void;
}

export function Hole({ showPercent, index, odds, language, handleClick }: HoleProps){
    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          handleClick(index);
        }
      };

    return(
        <div className={`${styles.hole} ${styles.bg}`}>
            <button
                key={index}
                type="button"
                className={styles.hole}
                onClick={() => handleClick(index)} 
                onKeyDown={(event) => handleKeyDown(index, event)}
                >
                <img className={styles.hole} src={holeImage} alt="Icon of a hole on the ground" />
                    {language === 'en-us' ? 
                        <p>Hole {index + 1}</p> :
                        <p>Toca {index + 1}</p>}
                    {
                        showPercent &&
                        <p>{odds.toFixed(2)}%</p> 
                    }
            </button>
        </div>
    );
}