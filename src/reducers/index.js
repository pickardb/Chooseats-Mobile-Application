import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'

import { feathersAuthentication, feathersServices } from '../feathers';

export default combineReducers({
    user: feathersServices.users.reducer,
    auth: feathersAuthentication.reducer,
    form: formReducer,
});