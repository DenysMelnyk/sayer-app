import {makeObservable, observable, action} from "mobx";

class Store {
    messages = [
        {
            id: 1,
            title: 'First Item with customized title',
            slug: 'first-item',
            comments: [
                {
                    id: '3x',
                    text: 'This is a dummy comment of current message'
                },
                {
                    id: '37x',
                    text: 'The next comment!'
                }
            ]
        },
        {
            id: 2,
            title: 'Second Item',
            slug: 'second-item',
            comments: []
        },
        {
            id: 3,
            title: 'Third Item',
            slug: 'third-item',
            comments: []
        },
    ];

    addItem(itemTitleValue){
        let counter = 0;
        this.messages.push({
            id: Math.round(1 - Math.random()) * Math.random() + Math.random(),
            title: itemTitleValue,
            slug: `created-item-${counter}`,
            comments: []
        });
        counter++;
    }

    deleteItem(id){
        this.messages = this.messages.filter((item => item.id !== id));
    }

    constructor() {
        makeObservable(this, {
            messages: observable,
            addItem: action.bound,
            deleteItem: action.bound
        });
    }
}

export default new Store();