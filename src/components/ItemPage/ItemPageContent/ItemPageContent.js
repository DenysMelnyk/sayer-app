import React from 'react';
import styles from './ItemPageContent.module.css';
import Header from "../../../UI/Header/Header";
import Comment from "./Comment/Comment";
import Form from "../../../UI/Form/Form";
import ScrollableBlock from "../../../UI/ScrollableBlock/ScrollableBlock";

const ItemPageContent = ({title, comments, addNewComment}) => {

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
                <ScrollableBlock heightValue={412}>
                    {showComments}
                </ScrollableBlock>
                <div className={styles.NewCommentFormWrapper}>
                    <Form
                        placeholderText='New comment goes here..'
                        dataHandler={addNewComment}
                    />
                </div>
            </main>
        </div>
    )
}

export default ItemPageContent;