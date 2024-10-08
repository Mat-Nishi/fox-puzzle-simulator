import { useEffect, useRef } from 'react';
import styles from '../styles/RulesScreen.module.css';

interface RulesScreenProps {
  language: string;
  onClose: () => void;
}

export function RulesScreen({ language, onClose }: RulesScreenProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} ref={modalRef}>
        <h2>{language === 'en-us' ? 'Game Rules' : 'Regras do Jogo'}</h2>
        <div>
          <p>
            {language === 'en-us' ? (
              <>
                - The game simulates a logic puzzle where a fox hides in one of the holes, and your goal is to find the fox by selecting a hole in each move.
              </>
            ) : (
              <>
                - O jogo simula um puzzle lógico onde uma raposa se esconde em um dos buracos, e seu objetivo é encontrar a raposa selecionando um buraco em cada movimento.
              </>
            )}
          </p>
          <p>
            {language === 'en-us' ? (
              <>
                - If you don’t find the fox, it moves to an <strong>adjacent</strong> hole after each guess (the fox will never stay on the same hole).
              </>
            ) : (
              <>
                - Se você não encontrar a raposa, ela se move para um buraco <strong>adjacente</strong> após cada palpite (a raposa nunca ficará no mesmo buraco).
              </>
            )}
          </p>
          <p>
            {language === 'en-us' ? (
              <>
                - The app simulates all possible games, so it continues if there’s even one possible game where the fox could avoid being found with your sequence of moves.
              </>
            ) : (
              <>
                - O aplicativo simula todos os jogos possíveis, então ele continua se houver pelo menos um jogo onde a raposa poderia evitar ser encontrada com sua sequência de movimentos.
              </>
            )}
          </p>
          <p>
            {language === 'en-us' ? (
              <>
                - You win if your sequence guarantees finding the fox in every possible game.
              </>
            ) : (
              <>
                - Você ganha se sua sequência garantir encontrar a raposa em todos os jogos possíveis.
              </>
            )}
          </p>
          <p>
            {language === 'en-us' ? (
              <>
                - Your challenge is to find the shortest sequence of moves that ensures the fox is caught!
              </>
            ) : (
              <>
                - Seu desafio é encontrar a sequência mais curta de movimentos que garanta que a raposa seja capturada!
              </>
            )}
          </p>
          <h3>{language === 'en-us' ? 'Good Luck!' : 'Boa Sorte!'}</h3>
        </div>
        <button type='button' onClick={onClose} className={styles.closeButton}>
          {language === 'en-us' ? 'Close' : 'Fechar'}
        </button>
      </div>
    </div>
  );
  
}
