import React from 'react';
import styles from './ScrollableBlock.module.css';

const ScrollableBlock =({children, heightValue}) => {
    const styleHeight = {height: heightValue}
    return (
        <div
            className={styles.ScrollableBlock}
            style={styleHeight}>
            {children}
        </div>
    )
}

export default ScrollableBlock;