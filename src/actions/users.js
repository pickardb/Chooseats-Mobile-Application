import feathersClient from '../feathers/index';
import { SubmissionError } from 'redux-form';
import userTypes from '../types/users';
import feathers from '../feathers/index';
import { Actions } from 'react-native-router-flux';

const userService = feathersClient.service('users');

export const emailChanged = (text) => {
    return {
        type: userTypes.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return {
        type: userTypes.PASSWORD_CHANGED,
        payload: text
    };
};

export const signupUser = (values, dispatch) => (
    dispatch({
        type: userTypes.SIGNUP,
        payload: userService.create(values)
    })
        .then(loginUser(values)(dispatch))
        .catch(error => {
            console.log(error);
            throw new SubmissionError({
                ...error.errors,
                _errors: error.message
            });
        })
);

export const loginUser = ({ email, password }) => dispatch => (
    dispatch({
        type: userTypes.LOGIN,
        payload: feathers.authenticate({
            strategy: 'local',
            email: email,
            password: password
        })
    }).then(() => {
        Actions.checkScene();

    })
        .catch(e => {
            console.log(e);
        })
)



