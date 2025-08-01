import React, { Children, ReactNode } from 'react';
import Feat from '../Feat';
import styles from './styles.module.css';

interface FeatListProps {
    mode?: string;
    children?: ReactNode;
}

const FeatList: React.FC<FeatListProps> = ({ mode='default', children }) => {
    const [currentMode, setCurrentMode] = React.useState(mode);

    const handleModeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setCurrentMode(e.target.value);
    };
    return (
        <div className={`${styles.featList} ${currentMode === 'table' ? styles.tableMode : ''}`}>
            <select value={currentMode} onChange={handleModeChange} className={styles.modeSelector}>
                <option value="default">Default</option>
                <option value="grid">Grid</option>
                <option value="table">Table</option>
            </select>
            {Children.map(children, child => {
                if (
                    React.isValidElement(child) &&
                    child.type === Feat
                ) {
                    return React.cloneElement(child as React.ReactElement<{ mode?: string }>, { mode:currentMode });
                }
                return child;
            })}
        </div>
    );
};

export default FeatList;