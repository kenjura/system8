import React, { ReactNode } from 'react';
import styles from './styles.module.css';

interface PowerProps {
    name: string;
    description: string;
}

const Power: React.FC<PowerProps> = ({ name, description }) => {
    return (
        <div className={`${styles.power} ability-list-row`}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={styles.powerIcon}>
                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
            </svg>
            <div className={styles.powerName}>{name}</div>
            <div className={styles.powerDescription}>{description}</div>
        </div>
    );
};

export default Power;