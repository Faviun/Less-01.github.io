const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};


const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 6, message: body});
            return state;
        default:
            return state;
    }
}

export const sendMessageCreator = () => ({type: SEND_MESSAGE})
export const updateNewMessageBodyCreator = (body) =>
    ({type: UPDATE_NEW_MESSAGE_BODY, body: body})

export default dialogsReducer;