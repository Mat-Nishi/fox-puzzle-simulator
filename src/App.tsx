import { useState } from 'react';
import './App.css';
import Holes from './components/Holes';

function App() {
  const [totalFoxes, setTotalFoxes] = useState<number>(5);

  const updateTotalFoxes = (newTotal: number) => {
    setTotalFoxes(newTotal);
  };

  return (
    <>
      <h1 className='title'>Fox Puzzle Game</h1>
      <div className="card">
        <p>Total Foxes Left: {totalFoxes}</p>
      </div>
      <Holes onTotalChange={updateTotalFoxes} />

      <p className="read-the-docs">
        Click on the holes to reduce the number of foxes
      </p>

    </>
  );
}

export default App;
