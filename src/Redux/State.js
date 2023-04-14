const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'Hi, how are you', likesCount: 0},
                {id: 2, message: 'Its my first posts', likesCount: 23},
                {id: 3, message: 'test state.js', likesCount: 3}
            ],
            newPostText: ''
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
    },
    _callSubscriber() {
        console.log('State changed');
    },

    getState(){
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        }
        else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;
window.store = store;