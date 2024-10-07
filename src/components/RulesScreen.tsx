import styles from '../styles/RulesScreen.module.css';

interface RulesScreenProps {
  onClose: () => void;
}

export function RulesScreen({ onClose }: RulesScreenProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <h2>Game Rules</h2>
        <div>
            <p>
            - The game simulates a logic puzzle where a fox hides in one of the holes,
             and your goal is to find the fox by selecting a hole in each move.
            </p><p>
            - If you don’t find the fox, it moves to an <strong>adjacent</strong> hole after each guess (the fox will never stay on the same hole).
            </p><p>
            - The app simulates all possible games where the fox could be hiding, so the game continues 
            if there’s even one possible game where the fox could avoid being found with your sequence of moves.
            </p><p>
            - You win if your sequence guarantees finding the fox in every possible game.
            </p><p>
            - Your challenge is to find the shortest sequence of moves that ensures the fox is caught!
            </p>
            <h3>Good Luck!</h3>
        </div>
        <button type='button' onClick={onClose} className={styles.closeButton}>Close</button>
      </div>
    </div>
  );
}
