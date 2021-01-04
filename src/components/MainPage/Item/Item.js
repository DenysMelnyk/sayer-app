import React, {useState} from 'react';
import styles from './Item.module.css';
import {Link} from "react-router-dom";

const Item = ({title, commentsCount, deleteItem, itemId, itemSlug}) => {
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

    const deleteButtonHandler = () => {
        setShowDeleteBtn(prevState => !prevState)
    }

    const deleteItemAction = () => {
        deleteItem(itemId)
    }

    const deleteBtn = showDeleteBtn && (
        <button
            onClick={() => deleteItemAction()}
            className={styles.DeleteItemBtn}
        >Delete</button>
    );

    return (
        <div onClick={() => deleteButtonHandler()} className={styles.Item}>
            <h4
                className={styles.ItemTitle}
            >
               <Link to={`/${itemSlug}`}>{title}</Link>
            </h4>
            {commentsCount
                ? <span className={styles.CommentCount}>{commentsCount}</span>
                : null
            }
            {deleteBtn}
        </div>
    )
}

export default Item;