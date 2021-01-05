import React from 'react';
import {useHistory, useParams} from "react-router-dom";
import {observer} from "mobx-react";
import ItemPageContent from "./ItemPageContent/ItemPageContent";

const ItemPage = observer(({chosenMessage, addComment}) => {
    const {id} = useParams();
    const history = useHistory();

    const commentHandler = (value) => {
        addComment(id, value);
        history.push(`/${id}`)
    }

    return chosenMessage
        .filter(item => item.slug === id)
        .map(i => (
            <ItemPageContent
                key={i.id}
                title={i.title}
                comments={i.comments}
                addNewComment={commentHandler}
            />
        ))
});

export default ItemPage;