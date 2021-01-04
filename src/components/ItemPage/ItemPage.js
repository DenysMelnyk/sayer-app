import React from 'react';
import {useParams} from "react-router-dom";
import {observer} from "mobx-react";
import ItemPageContent from "./ItemPageContent/ItemPageContent";

const ItemPage = observer(({chosenMessage}) => {
    const {id} = useParams();
    return chosenMessage
        .filter(item => item.slug === id)
        .map(i => (
            <ItemPageContent
                key={i.id}
                title={i.title}
                comments={i.comments}
            />
        ))
});

export default ItemPage;