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
        loginUser(values, dispatch)
    } catch (error) {
        console.log(error);
        throw new SubmissionError({
            ...error.errors,
            _errors: error.message
        })
    }
};

export const loginUser = async (values, dispatch) => {
    try {
        await dispatch({
            type: userTypes.LOGIN,
            payload: feathersClient.authenticate({
                strategy: 'local',
                email: values.email,
                password: values.password
            })
        });
        Actions.rooms();
    } catch (error) {
        console.log(error);
        throw new SubmissionError({
            ...error.errors,
            _errors: error.message
        })
    }
}

export const authenticateUser = accessToken => async (dispatch) => {
    try {
        await dispatch({
            type: userTypes.AUTHENTICATE,
            payload: feathersClient.authenticate({
                strategy: 'jwt',
                accessToken: accessToken
            })
        });
        Actions.reset('rooms');
    } catch (error) {
        Actions.reset('landingScene');
        console.log(error);
    }
}

export const logout = async (dispatch) => {
    try {
        await dispatch({
            type: userTypes.LOGOUT,
            payload: feathersClient.logout()
        });
        Actions.reset('landingScene');
    } catch (error) {
        Actions.reset('landingScene');
        console.log(error);
    }
};

export const newUser = () => {

    return {
        type: userTypes.NEW_USER,
        payload: null
    }
}








