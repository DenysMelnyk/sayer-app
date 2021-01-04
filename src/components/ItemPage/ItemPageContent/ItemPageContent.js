import React from 'react';
import styles from './ItemPageContent.module.css';
import Header from "../../../UI/Header/Header";
import Comment from "./Comment/Comment";
import Form from "../../../UI/Form/Form";

const ItemPageContent = ({title, comments}) => {
    const showComments = comments.length > 0
        ? comments.map(item => (
            <Comment key={item.id}
                     text={item.text}/>
        ))
        : <p className={styles.CommentPlaceholder}>
            Write your first comment on this page!
        </p>;

    return (
        <div className={styles.ItemPageContent}>
            <Header headTitle={title}/>
            <main className={styles.CommentsWrapper}>
                {showComments}
                <div className={styles.NewCommentFormWrapper}>
                    <Form
                        placeholderText='New comment goes here..'
                        dataHandler={() => {
                        }}
                    />
                </div>
            </main>
        </div>
    )
}

export default ItemPageContent;