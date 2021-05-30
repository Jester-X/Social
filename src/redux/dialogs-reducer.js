const SEND_MESSAGE = 'SEND_MESSAGE';

let initialState = {
    dialogs: [
        {name: 'Vlad', id: 1},
        {name: 'Marinka', id: 2},
        {name: 'Zaec', id: 3},
        {name: 'Viktor', id: 4},
        {name: 'Dimas', id: 5}
    ],
    messages: [
        {id: 1, message: 'yo'},
        {id: 1, message: 'hi'},
        {id: 1, message: 'hello'},
        {id: 1, message: 'prick'},
        {id: 1, message: 'DIMOOOOOON'},
    ],
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: [...state.messages, {id: state.messages.length+1, message: action.newMessageValue}]
            }
        default:
            return state;
    }
}

export const sendMessage = (newMessageValue) => ({type: SEND_MESSAGE, newMessageValue})

export default dialogsReducer;