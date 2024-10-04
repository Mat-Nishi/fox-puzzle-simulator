import { useEffect } from 'react';

interface HolesProps {
  positions: number[];
  onUpdatePositions: (newPositions: number[]) => void;
}

function Holes({ positions, onUpdatePositions }: HolesProps) {
  const handleClick = (index: number) => {
    const newPositions = new Array(5).fill(0);

    for (let i = 0; i < 5; i++) {
      if (i === index) {
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
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleClick(index);
    }
  };

  return (
    <div className="grid">
      {positions.map((foxes, index) => (
        <button
          key={index} // eslint-disable-line
          type="button"
          className="hole" 
          onClick={() => handleClick(index)} 
          onKeyDown={(event) => handleKeyDown(index, event)}
        >
          <p>Hole {index + 1}</p>
          <p>Foxes: {foxes}</p>
        </button>
      ))}
    </div>
  );
}

export default Holes;
