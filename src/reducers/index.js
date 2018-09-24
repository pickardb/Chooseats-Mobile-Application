import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import userReducer from '../reducers/user';

export default combineReducers({
    user: userReducer,
    form: formReducer,
});