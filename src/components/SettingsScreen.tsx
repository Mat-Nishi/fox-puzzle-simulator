import { useEffect, useRef, useState } from 'react';
import styles from '../styles/SettingsScreen.module.css';

interface SettingsProps {
    showPercent: boolean;
    language: string;
    toggleShowPercent: () => void;
    changeLanguage: (language: string) => void;
    onClose: () => void;
}

export function SettingsScreen({ showPercent, language, toggleShowPercent, changeLanguage, onClose }: SettingsProps) {
    const [checked, setChecked] = useState(showPercent);
    const modalRef = useRef<HTMLDivElement>(null);

    const handleLanguageChange = (language: string) => {
        changeLanguage(language);
    };

    const handleCheckboxChange = () => {
        setChecked(!checked);
        toggleShowPercent();
    };

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
                <h2>{language === 'en-us' ? 'Settings' : 'Configurações'}</h2>

                
                <div className={styles.langSelector}>
                    {language === 'en-us' ? <p>Language: </p> : <p>Idioma: </p>}
                    <label>
                        <input
                            type="radio"
                            value="en-us"
                            checked={language === 'en-us'}
                            onChange={() => handleLanguageChange('en-us')}
                        />
                        English
                    </label>
                    <label>
                        <input
                            type="radio"
                            value="pt-br"
                            checked={language === 'pt-br'}
                            onChange={() => handleLanguageChange('pt-br')}
                        />
                        Português
                    </label>
                </div>

                <div>
                    <label>
                        <input 
                            type='checkbox' 
                            className={styles.checkbox} 
                            checked={checked} 
                            onChange={handleCheckboxChange} 
                        />
                        {language === 'en-us' ? 
                            'Show odds of finding the fox in each hole' : 
                            'Mostrar chances de encontrar a raposa em cada buraco'}
                    </label>
                </div>

                <button type='button' onClick={onClose} className={styles.closeButton}>
                    {language === 'en-us' ? 'Close' : 'Fechar'}
                </button>
            </div>
        </div>
    );
}
