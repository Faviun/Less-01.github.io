import profileReducer from "./ProfileReducer";
import dialogsReducer from "./DialogsReducer";
import sidebarReducer from "./SidebarReducer";

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
            ],
            newMessageBody: ''
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
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;