import React from 'react';
import styles from './Comment.module.css';

const Comment = ({text}) => {
    return (
        <div className={styles.Comment}>
            <div className={styles.UserImgPlaceholder}>
                <div className={styles.UserImg}/>
            </div>
            <div className={styles.CommentText}>
                {text}
            </div>
        </div>
    )
}

export default Comment;