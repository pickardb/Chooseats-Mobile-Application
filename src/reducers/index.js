import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from '../reducers/user';
import roomsReducer from '../reducers/rooms';
import messagesReducer from '../reducers/messages';

export default combineReducers({
    user: userReducer,
    form: formReducer,
    rooms: roomsReducer,
    messages: messagesReducer,
});