import {makeObservable, observable, action} from "mobx";

class Store {
    messages = [
        {
            id: 1,
            title: 'First Item with customized long title',
            slug: 'first-item',
            comments: [
                {
                    id: 90,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like read-able English.'
                },
                {
                    id: 45,
                    text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout..'
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
            comments: [
                {
                    id: '3x-7',
                    text: 'Lorem Ipsum'
                },
                {
                    id: 'g37x',
                    text: 'Dummy Content!'
                }
            ]
        },
    ];
    counter = 0;

    addItem(itemTitleValue) {
        this.messages.push({
            id: Math.round(1 - Math.random()) * Math.random() + Math.random(),
            title: itemTitleValue,
            slug: `created-item-${this.counter}`,
            comments: []
        });
        this.counter++;
    }

    deleteItem(id) {
        this.messages = this.messages.filter((item => item.id !== id));
    }

    addComment(parentItemSlug, commentValue) {
        const currentMessage = this.messages.filter(item => item.slug === parentItemSlug)[0];
        currentMessage.comments.push({
            id:  Math.round(1 - Math.random()) * Math.random() + Math.random(),
            text: commentValue
        })
    }

    constructor() {
        makeObservable(this, {
            messages: observable,
            counter: observable,
            addItem: action.bound,
            deleteItem: action.bound,
            addComment: action.bound
        });
    }
}

export default new Store();