import {makeAutoObservable} from "mobx";

class Store {
    messages = [
        {
            id: 1,
            title: 'First Item with customized title',
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
            comments: []
        },
        {
            id: 3,
            title: 'Third Item',
            comments: []
        },
    ];
    addItem(itemTitleValue){
        this.messages.push({
            id: Math.round(1 - Math.random()) * Math.random(),
            title: itemTitleValue,
            comments: []
        })
    }
    constructor() {
        makeAutoObservable(this)
    }
}

export default new Store();