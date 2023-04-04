import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you', likesCount: 0},
            {id: 2, message: 'Its my first posts', likesCount: 23},
            {id: 3, message: 'test state.js', likesCount: 3}
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Loh1'},
            {id: 2, name: 'Loh2'},
            {id: 3, name: 'Loh3'},
            {id: 4, name: 'Loh4'},
            {id: 5, name: 'Loh5'},
            {id: 6, name: 'Loh6'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hi123'},
            {id: 3, message: 'Hi54'},
            {id: 4, message: 'Hi45'},
            {id: 5, message: 'Hi87'}
        ]
    },
    sidebar: {

    }
}

export let addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message:postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;