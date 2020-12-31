import React from 'react';
import styles from './Form.module.css';
import Button from '../Button/Button';

const Form = ({type, formHandler, placeholderText}) => {
    const formClasses = type === 'addItem'
        ? [styles.Form, styles.FormAddItem]
        : [styles.Form, styles.FormAddComment];

    return (
        <form
            className={formClasses.join(' ')}
            onSubmit={(e) => formHandler(e)}>
            <input
                type="text"
                placeholder={placeholderText}
            />
            <Button>&gt;</Button>
        </form>
    )
}

export default Form;