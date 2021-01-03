import React, {useState, useCallback} from 'react';
import Header from "../../UI/Header/Header";
import Button from "../../UI/Button/Button";
import Item from "./Item/Item";
import styles from './MainPage.module.css';
import {Link} from "react-router-dom";
import {observer} from "mobx-react";

const MainPage = observer(({store}) => {
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null) {
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    const scrollClass = height < 420
        ? [styles.ItemsWrap]
        : [styles.ItemsWrap, styles.ItemsWrapScrollable]

    const itemsList = store.messages.map(item => (
        <Item
            key={item.id}
            itemId={item.id}
            title={item.title}
            commentsCount={item.comments.length}
            deleteItem={store.deleteItem}
        />
    ))
    return (
        <div className={styles.MainPage}>
            <Header type='mainPage'/>
            <main
                className={scrollClass.join(' ')}
                ref={measuredRef}
            >
                <div className={styles.ItemsList}>
                    {itemsList}
                </div>
                <div className={styles.ButtonWrap}>
                    <Button
                        btnType='addItem'
                    >
                        <Link to='/new-item'>+</Link>
                    </Button>
                </div>
            </main>
        </div>
    )
})

export default MainPage;