import React from 'react';
import Container from "./UI/Container/Container";
import styles from './App.module.css';
import MainPage from "./components/MainPage/MainPage";

const App = () => {
    return (
        <div className={styles.App}>
            <Container>
                <div className={styles.AppBody}>
                    <MainPage/>
                </div>
            </Container>
        </div>
    );
}

export default App;
