import React from 'react';
import styles from './Header.module.css';

const Header = ({type, headTitle=''}) => {
    let headerStructure;
    const headerClasses = type === 'mainPage'
        ? [styles.Header, styles.HeaderMain]
        : [styles.Header, styles.HeaderInner];
    switch (type){
        case 'mainPage':
            headerStructure = (
                <header className={headerClasses.join(' ')}>
                    <h1 className={styles.AppName}>Sayer</h1>
                    <h4 className={styles.AppSubtitle}>World's most used time waster</h4>
                </header>
            )
            break;
        default:
            headerStructure = (
                <header className={headerClasses.join(' ')}>
                    <a href="/">Back</a>
                    <h2>{headTitle}</h2>
                </header>
            )
    }
    return headerStructure;
}

export default Header;