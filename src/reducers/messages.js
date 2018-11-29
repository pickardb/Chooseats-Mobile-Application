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
            var messages = action.payload.data.map(message => {
                const system = message.type === "system" ? true : false;

                return ({
                    _id: message.id.toString(),
                    createdAt: message.createdAt,
                    system,
                    text: message.text,
                    user: {
                        _id: message.userId,
                        name: message.user.email
                    }

                });
            });
            return { ...state, messages: messages, isLoading: false };
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
            localMessages.unshift(action.payload);
            return { ...state, localMessages };

        case types.REMOVE_LOCAL_MESSAGE:
            return { ...state, localMessages: state.localMessages.filter((message) => message.id !== action.payload) };
        case types.ADD_NEW_MESSAGE_FROM_SERVER:
            var messages = [...state.messages];
            const system = action.payload.type === "system" ? true : false;
            const formattedMessage = {
                _id: action.payload.id.toString(),
                createdAt: action.payload.createdAt,
                system,
                text: action.payload.text,
                user: {
                    _id: action.payload.userId,
                    name: action.payload.user.email
                }

            }

            messages.unshift(formattedMessage);
            return { ...state, messages };

        default:
            return state;
    }
};

export default userReducer;
