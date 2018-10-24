import { reducer as formReducer } from 'redux-form';

import userTypes from '../types/users';
import messageTypes from '../types/messages';
import roomTypes from '../types/rooms';

export default formReducer.plugin({
    Login: (state, action) => { // <------ 'Login' is name of form given to reduxForm()
        switch (action.type) {
            case userTypes.LOGIN_FULFILLED:
                return undefined;       // <--- blow away form data
            default:
                return state;
        }
    },
    SignUp: (state, action) => { // <------ 'SignUp' is name of form given to reduxForm()
        switch (action.type) {
            case userTypes.SIGNUP_FULFILLED:
                return undefined;       // <--- blow away form data
            default:
                return state;
        }
    },
    SendMessage: (state, action) => { // <------ 'SendMessage' is name of form given to reduxForm()
        switch (action.type) {
            case messageTypes.SEND_MESSAGE_FULFILLED:
                return undefined;       // <--- blow away form data
            default:
                return state;
        }
    },
    RoomJoin: (state, action) => { // <------ 'RoomJoin' is name of form given to reduxForm()
        switch (action.type) {
            case roomTypes.JOIN_ROOM_FUFILLED:
                return undefined;       // <--- blow away form data
            default:
                return state;
        }
    }
});