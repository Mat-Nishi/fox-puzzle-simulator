import styles from '../styles/RotateWarning.module.css'
import rotateIcon from '../assets/rotate-device.svg'

const RotateWarning: React.FC = () => {
  return (
    <div className={styles.warningContainer}>
      <img src={rotateIcon} alt="Icon of a phone being flipped to landscape orientation" />
      <h1>Please rotate your phone</h1>
      <p>This application is best viewed in landscape mode.</p>
    </div>
  );
};

export default RotateWarning;
