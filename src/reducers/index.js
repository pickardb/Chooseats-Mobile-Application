import { combineReducers } from 'redux';

import userReducer from './user';
import { feathersAuthentication } from '../feathers';

export default combineReducers({
    user: userReducer,
    auth: feathersAuthentication.reducer,
});