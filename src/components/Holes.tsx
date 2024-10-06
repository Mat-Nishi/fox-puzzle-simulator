import { Hole } from "./Hole";
import styles from '../styles/Holes.module.css';

interface HolesProps {
  positions: number[];
  holes: number;
  onUpdatePositions: (newPositions: number[]) => void;
  onUpdateOdds: (chance: number) => void;
}

function Holes({ positions, holes, onUpdatePositions, onUpdateOdds }: HolesProps) {
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


  return (
    <div className={styles.grid}>
        {positions.map((foxes, index) => {
            const id = index;
            return (
                <Hole 
                    key={`hole-${id}`}
                    index={id}
                    foxes={foxes} 
                    handleClick={handleClick} 
                />
            );
        })}
    </div>
);
}

export default Holes;
