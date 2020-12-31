import React from 'react';
import styles from './Header.module.css';
import Button from "../Button/Button";
import {Link} from "react-router-dom";

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
                    <Button>
                        <Link to='/'>&larr;</Link>
                    </Button>
                    <h2 className={styles.PageName}>{headTitle}</h2>
                </header>
            )
    }
    return headerStructure;
}

export default Header;