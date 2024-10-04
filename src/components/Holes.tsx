import { useState } from 'react';

interface HolesProps {
  onTotalChange: (newTotal: number) => void;
}

function Holes({ onTotalChange }: HolesProps) {
  const [positions, setPositions] = useState<number[]>([1, 1, 1, 1, 1]);

  const handleClick = (index: number) => {
    if (positions[index] > 0) {
        const newPositions = new Array(5).fill(0);
        const clickedValue = positions[index];

      for (let i=0;i<5;i++){
        if (i === index){
            continue
        }
        if (i === 0){
            newPositions[1] += positions[i];
        }
        else if(i === positions.length -1){
            newPositions[positions.length -2] += positions[i]
        }
        else{
            newPositions[i-1] += positions[i];
            newPositions[i+1] += positions[i];
        }
      }
      setPositions(newPositions);
  
      const newTotal = newPositions.reduce((acc, cur) => acc + cur, 0);
      onTotalChange(newTotal);
    }
  };

  return (
    <div className="grid">
      {positions.map((foxes, index) => (
        <div key={index} className="hole" onClick={() => handleClick(index)}>
          <p>Hole {index + 1}</p>
          <p>Foxes: {foxes}</p>
        </div>
      ))}
    </div>
  );
}

export default Holes;
