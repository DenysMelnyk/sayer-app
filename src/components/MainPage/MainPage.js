import React from 'react';
import Header from "../../UI/Header/Header";
import Button from "../../UI/Button/Button";
import Item from "./Item/Item";
import styles from './MainPage.module.css';
import store from "../../store/store";
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
        <div className='MainPage'>
            <Header type='mainPage'/>
            <div className={styles.ItemsWrap}>
                <ul className={styles.ItemsList}>
                    {itemsList}
                </ul>
                <Button
                    btnAction={() => console.log('Add Item clicked!')}
                    btnType='addItem'
                >+</Button>
            </div>
        </div>
    )
})

export default MainPage;