import React from 'react';
import {useHistory} from "react-router-dom";
import {observer} from "mobx-react";
import Form from "../../UI/Form/Form";
import Header from "../../UI/Header/Header";
import styles from './CreateItemPage.module.css';

const CreateItemPage = observer(() => {
    const history = useHistory();
    const createNewItemHandler = e => {
        e.preventDefault();
        console.log(e.currentTarget.value);
        history.push('/');
    }
    return (
        <div className={styles.CreateItemPage}>
            <Header
                type='innerPage'
                headTitle='Create new item'
            />
            <main className={styles.NewItemFormWrapper}>
                <Form
                    type='addItem'
                    formHandler={e => createNewItemHandler(e)}
                    placeholderText='New item title..'
                />
            </main>
        </div>
    );
});

export default CreateItemPage;