import types from '../types/messages';
const INITIAL_STATE = {
    isLoading: false,
    messages: [],
    localMessages: []
};

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.GET_MESSAGES_PENDING:
            return { ...state, localMessages: [], isLoading: true };
        case types.GET_MESSAGES_FULFILLED:
            return { ...state, messages: action.payload.data, isLoading: false };
        case types.GET_MESSAGES_REJECTED:
            return { ...state, isLoading: false, ...action.payload.errors };
        case types.SEND_MESSAGE_PENDING:
            return { ...state };
        case types.SEND_MESSAGE_FULFILLED:
            return { ...state };
        case types.SEND_MESSAGE_REJECTED:
            return { ...state };
        case types.ADD_LOCAL_MESSAGE:
            var localMessages = state.localMessages;
            localMessages.push(action.payload);
            return { ...state, localMessages };

        case types.REMOVE_LOCAL_MESSAGE:
            return { ...state, localMessages: state.localMessages.filter((message) => message.id !== action.payload) };
        case types.ADD_NEW_MESSAGE_FROM_SERVER:
            var messages = state.messages;
            messages.push(action.payload);
            return { ...state, messages };

        default:
            return state;
    }
};

export default userReducer;
