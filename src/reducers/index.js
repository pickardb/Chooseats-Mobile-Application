import { combineReducers } from 'redux';

import userReducer from '../reducers/user';
import roomsReducer from '../reducers/rooms';
import messagesReducer from '../reducers/messages';
import formReducer from '../reducers/form';
import votingReducer from '../reducers/voting'
import restaurantReducer from '../reducers/restaurants';

export default combineReducers({
    user: userReducer,
    form: formReducer,
    rooms: roomsReducer,
    messages: messagesReducer,
    voting: votingReducer,
    restaurants: restaurantReducer,
}); 
