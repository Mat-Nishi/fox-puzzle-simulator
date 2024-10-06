import holeImage from '../assets/hole.svg';
import styles from '../styles/Hole.module.css'

interface HoleProps{
    index: number;
    foxes: number;
    handleClick: (index: number) => void;
}

export function Hole({ index, foxes, handleClick }: HoleProps){
    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          handleClick(index);
        }
      };

    return(
        <div className={styles.hole}>
            <button
                key={index}
                type="button"
                className={styles.hole}
                onClick={() => handleClick(index)} 
                onKeyDown={(event) => handleKeyDown(index, event)}
                >
                <img className={styles.hole} src={holeImage} alt="Icon of a hole on the ground" />
                    <p>Hole {index + 1}</p> 
                    {
                        false && //TODO option to see # foxes
                        <p>Foxes: {foxes}</p> 
                    }
            </button>
        </div>
    );
}