import { Hole } from "./Hole";
import styles from '../styles/Holes.module.css';

interface HolesProps {
  showPercent: boolean;
  positions: number[];
  holes: number;
  onUpdatePositions: (newPositions: number[]) => void;
  onUpdateOdds: (chance: number) => void;
}

function Holes({ showPercent, positions, holes, onUpdatePositions, onUpdateOdds }: HolesProps) {
  const handleClick = (index: number) => {
    const newPositions = new Array(holes).fill(0);
    let totalFoxes = 0;
    let foxesFound = 0;

    for (let i = 0; i < holes; i++) {
      totalFoxes += positions[i];

      if (i === index) {
        foxesFound = positions[i];
        continue;
      }
      if (i === 0) {
        newPositions[1] += positions[i];
      } else if (i === positions.length - 1) {
        newPositions[positions.length - 2] += positions[i];
      } else {
        newPositions[i - 1] += positions[i];
        newPositions[i + 1] += positions[i];
      }
    }
    onUpdatePositions(newPositions);
    onUpdateOdds(foxesFound/totalFoxes);
  };

  const calcOdds = (showPercent: boolean) => {
    const odds = new Array(holes).fill(-1);
    let totalFoxes = 0;
    for (let i=0;i<holes;i++){
      totalFoxes += positions[i];
    }
    for (let i=0;i<holes;i++){
      if (showPercent){
        odds[i] = 100*(positions[i]/totalFoxes);
      }
    }
    return odds;
  }

  const odds = calcOdds(showPercent);

  return (
    <div className={styles.grid}>
        {odds.map((chance,index) => {
            const id = index;
            return (
                <Hole 
                    showPercent={showPercent}
                    key={`hole-${id}`}
                    index={id}
                    odds={chance}
                    handleClick={handleClick} 
                />
            );
        })}
    </div>
);
}

export default Holes;
