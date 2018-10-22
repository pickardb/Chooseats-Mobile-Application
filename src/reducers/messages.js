import types from '../types/messages'
const INITIAL_STATE = {
    isLoading: false,
    messages: []
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_MESSAGES_PENDING:
            return { ...state, isLoading: true };
        case types.GET_MESSAGES_FULFILLED:
            return { messages: action.payload.data, isLoading: false };
        case types.GET_MESSAGES_REJECTED:
            return { ...state, isLoading: false, ...action.payload.errors };
        case types.SEND_MESSAGE_PENDING:
            return null;
        case types.SEND_MESSAGE_FULFILLED:
            return null;
        case types.SEND_MESSAGE_REJECTED:
            return null;
        default:
            return state;
    }
}

export default userReducer;