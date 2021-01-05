import React, {useState, useCallback} from 'react';
import styles from './ItemPageContent.module.css';
import Header from "../../../UI/Header/Header";
import Comment from "./Comment/Comment";
import Form from "../../../UI/Form/Form";

const ItemPageContent = ({title, comments, addNewComment}) => {
    const [height, setHeight] = useState(0);

    const measuredRef = useCallback(node => {
        if (node !== null){
            setHeight(node.getBoundingClientRect().height);
        }
    }, []);

    console.log(height)

    const commentBodyClasses = height > 300
        ? [styles.CommentsBody, styles.CommentsBodyScroll]
        : [styles.CommentsBody];

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
                <div
                    className={commentBodyClasses.join(' ')}
                    ref={measuredRef}
                >
                    {showComments}
                </div>
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