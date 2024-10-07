import styles from '../styles/Header.module.css'

interface HeaderProps {
    rulesButton: () => void;
    settingsButton: () => void;
  }
  
export function Header({ settingsButton, rulesButton }: HeaderProps){
    return(
        <div className={styles.header}>
            <h1>
                Fox in the hole Puzzle
            </h1>
            <div className={styles.buttons}>
            <button type='button' onClick={settingsButton}>
                    Settings
                </button>
                <button type='button' onClick={rulesButton}>
                    Rules
                </button>
            </div>
        </div>
    )
}