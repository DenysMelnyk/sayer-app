import React from 'react';
import Header from "../../UI/Header/Header";
import Button from "../../UI/Button/Button";
import Item from "./Item/Item";
import styles from './MainPage.module.css';
import store from "../../store/store";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";

const MainPage = observer(() => {

    const itemsList = store.messages.map(item => (
        <li key={item.id}>
            <Item
                title={item.title}
                commentsCount={item.comments.length}
            />
        </li>
    ))
    return (
        <div className={styles.MainPage}>
            <Header type='mainPage'/>
            <main className={styles.ItemsWrap}>
                <ul className={styles.ItemsList}>
                    {itemsList}
                </ul>
                <Button
                    btnType='addItem'
                >
                    <Link to='/new-item'>+</Link>
                </Button>
            </main>
        </div>
    )
})

export default MainPage;