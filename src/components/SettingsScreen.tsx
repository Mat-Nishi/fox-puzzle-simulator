import { useState } from 'react';
import styles from '../styles/SettingsScreen.module.css';

interface SettingsProps {
    showPercent: boolean; 
    toggleShowPercent: () => void;
    onClose: () => void;
}

export function SettingsScreen({ showPercent, toggleShowPercent, onClose }: SettingsProps) {
    const [checked, setChecked] = useState(showPercent);

    const handleCheckboxChange = () => {
        setChecked(!checked);
        toggleShowPercent();
    };

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>Settings</h2>
                <div>
                    <label>
                        <input 
                            type='checkbox' 
                            className={styles.checkbox} 
                            checked={checked} 
                            onChange={handleCheckboxChange} 
                        />
                        Show odds of finding the fox in each hole
                    </label>
                </div>
                <button type='button' onClick={onClose} className={styles.closeButton}>Close</button>
            </div>
        </div>
    );
}
