import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Container from "./UI/Container/Container";
import styles from './App.module.css';
import store from "./store/store";
import MainPage from "./components/MainPage/MainPage";
import CreateItemPage from "./components/CreateItemPage/CreateItemPage";
import {observer} from "mobx-react";
import ItemPage from "./components/ItemPage/ItemPage";

const App = observer(() => {
    return (
        <div className={styles.App}>
            <Container>
                <div className={styles.AppBody}>
                    <Switch>
                        <Route path='/new-item'>
                            <CreateItemPage addItem={store.addItem}/>
                        </Route>
                        <Route path='/:id'>
                            <ItemPage chosenMessage={store.messages}/>
                        </Route>
                        <Route path='/'>
                            <MainPage
                                deleteItem={store.deleteItem}
                                messages={store.messages}/>
                        </Route>
                    </Switch>
                </div>
            </Container>
        </div>
    );
})

export default App;
