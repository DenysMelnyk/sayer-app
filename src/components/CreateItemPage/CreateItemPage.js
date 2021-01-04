import React from 'react';
import {useHistory} from 'react-router-dom';
import Form from '../../UI/Form/Form';
import Header from '../../UI/Header/Header';
import styles from './CreateItemPage.module.css';

const CreateItemPage = ({addItem}) => {
    const history = useHistory();
    const createNewItemHandler = (newItemValue) => {
        addItem(newItemValue);
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
                    dataHandler={createNewItemHandler}
                    placeholderText='New item title..'
                />
            </main>
        </div>
    );
};

export default CreateItemPage;