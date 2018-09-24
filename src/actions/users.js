import feathersClient from '../feathers/index';
import { SubmissionError } from 'redux-form';

import userTypes from '../types/users';

const userService = feathersClient.service('users');

export const signupUser = (values, dispatch) => {

    userService.create(values).then(
        (values) => console.log(values))
        .catch(
            error => console.log(error)
        );
};


export const signupUser2 = (values, dispatch) => (
    dispatch({
        type: userTypes.SIGNUP,
        payload: userService.create(values)
    })
        .then(values => console.log(values))
        .catch(error => {
            console.log(error);
            throw new SubmissionError({
                ...error.errors,
                _errors: error.message
            });
        })
);