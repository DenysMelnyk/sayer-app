import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Container from "./UI/Container/Container";
import styles from './App.module.css';
import store from "./store/store";
import MainPage from "./components/MainPage/MainPage";
import CreateItemPage from "./components/CreateItemPage/CreateItemPage";

const App = () => {
    return (
        <div className={styles.App}>
            <Container>
                <div className={styles.AppBody}>
                    <Switch>
                        <Route path='/new-item'>
                            <CreateItemPage store={store}/>
                        </Route>
                        <Route path='/'>
                            <MainPage store={store}/>
                        </Route>
                    </Switch>
                </div>
            </Container>
        </div>
    );
}

export default App;
