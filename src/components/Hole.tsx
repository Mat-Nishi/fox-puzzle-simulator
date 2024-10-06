import holeImage from '../assets/hole.svg';
import '../styles/Hole.css'

interface HoleProps{
    index: number;
    foxes: number;
    handleClick: (index: number) => void;
}

export function Hole({ index, foxes, handleClick }: HoleProps){
    const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLButtonElement>) => {
        if (event.key === 'Enter' || event.key === ' ') {
          handleClick(index);
        }
      };

    return(
        <button
            key={index} // eslint-disable-line
            type="button"
            className="hole" 
            onClick={() => handleClick(index)} 
            onKeyDown={(event) => handleKeyDown(index, event)}
            >
            <img src={holeImage} alt="Icon of a hole on the ground" />
            <div className="info">
                <p>Hole {index + 1}</p> 
                {/* <p>Foxes: {foxes}</p>    */}
            </div>
        </button>
    );
}