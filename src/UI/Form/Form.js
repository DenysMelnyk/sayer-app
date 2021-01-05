import React, {useState} from 'react';
import styles from './Form.module.css';
import Button from '../Button/Button';

const Form = ({type, dataHandler, placeholderText}) => {
    const [inputValue, setInputValue] = useState('');
    const formClasses = type === 'addItem'
        ? [styles.Form, styles.FormAddItem]
        : [styles.Form, styles.FormAddComment];

    const inputHandler = e => setInputValue(e.target.value);

    const submitHandler = e => {
        e.preventDefault();
        if(inputValue){
            dataHandler(inputValue);
            setInputValue('');
        }
    }

    return (
        <form
            className={formClasses.join(' ')}
            onSubmit={e => submitHandler(e)}>
            <input
                value={inputValue}
                type="text"
                placeholder={placeholderText}
                onChange={ e => inputHandler(e)}
            />
            <Button btnAction={submitHandler}>
                &gt;
            </Button>
        </form>
    )
}

export default Form;