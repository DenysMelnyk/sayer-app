import React from 'react';
import styles from './Button.module.css';

const Button = ({btnType, btnAction, children}) => {
    const buttonStyles = btnType === 'addItem'
        ? [styles.Button, styles.AddItemButton]
        : [styles.Button];
    return (
        <button
            className={buttonStyles.join(' ')}
            onClick={() => btnAction()}
        >
            {children}
        </button>
    )
}

export default Button;