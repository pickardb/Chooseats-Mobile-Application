import feathersClient from '../feathers/index';
import { SubmissionError } from 'redux-form';
import { Actions } from 'react-native-router-flux';

import userTypes from '../types/users';

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

export const signupUser = async (values, dispatch) => {
    try {
        await dispatch({
            type: userTypes.SIGNUP,
            payload: userService.create(values)
        })
        loginUser(values)(dispatch)
    } catch (error) {
        console.log(error);
        throw new SubmissionError({
            ...error.errors,
            _errors: error.message
        })
    }
};

export const loginUser = ({ email, password }) => async dispatch => {
    try {
        await dispatch({
            type: userTypes.LOGIN,
            payload: feathersClient.authenticate({
                strategy: 'local',
                email: email,
                password: password
            })
        });
        Actions.checkScene();
    } catch (err) {
        console.log(err);
    }

}







