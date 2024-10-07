import styles from '../styles/WinScreen.module.css'

interface winScreenProps{
    reset: () => void;
}

export function WinScreen({reset}: winScreenProps){
    return(
        <div className={`${styles.winScreen} ${styles.blur}`}>
            <div className={styles.sine}>
                <h1 className={styles.winScreen}>You found the fox!</h1>
            </div>
            <button className={styles.winScreen } type='button' onClick={reset}>Restart</button>
        </div>
    )   
}