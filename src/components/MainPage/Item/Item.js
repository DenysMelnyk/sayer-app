import React, {useState} from 'react';
import styles from './Item.module.css';

const Item = ({title, commentsCount}) => {
    const [showDeleteBtn, setShowDeleteBtn] = useState(false);

    const deleteButtonHandler = () => {
        setShowDeleteBtn(prevState => !prevState)
    }

    const deleteBtn = showDeleteBtn && (
        <button
            onClick={() => console.log('Delete clicked')}
            className={styles.DeleteItemBtn}
        >Delete</button>
    );

    return (
        <div onClick={() => deleteButtonHandler()} className={styles.Item}>
            <h4
                className={styles.ItemTitle}
            >
               {title}
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