import styles from '../styles/Header.module.css'

interface HeaderProps {
    language: string;
    rulesButton: () => void;
    settingsButton: () => void;
  }
  
export function Header({ language, settingsButton, rulesButton }: HeaderProps){
    return(
        <div className={styles.header}>
            { language === 'en-us' ?
            <h1>
                Fox in the hole Puzzle
            </h1>:
            <h1>
                Puzzle da raposa
            </h1>
            }
            { language === 'en-us' ? 
                <div className={styles.buttons}>
                <button type='button' onClick={settingsButton}>
                        Settings
                    </button>
                    <button type='button' onClick={rulesButton}>
                        Rules
                    </button>
                </div> : 

                <div className={styles.buttons}>
                <button type='button' onClick={settingsButton}>
                        Configurações
                    </button>
                    <button type='button' onClick={rulesButton}>
                        Regras
                    </button>
            </div>
            }
        </div>
    )
}