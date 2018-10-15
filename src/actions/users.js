import feathersClient from '../feathers/index';
import { SubmissionError } from 'redux-form';
import * as userTypes from '../types/users';
import feathers from '../feathers/index';
import {Actions} from 'react-native-router-flux';
import App from '../App';
/*import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED
} from '../types/users'*/

const userService = feathersClient.service('users');

export const emailChanged = (text) => {
    return{
        type: userTypes.EMAIL_CHANGED,
        payload: text
    };
};

export const passwordChanged = (text) => {
    return{
        type: userTypes.PASSWORD_CHANGED,
        payload: text
    };
};

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

export const loginUser = ({email, password}) => {
    return (dispatch) => {
        dispatch({type: userTypes.LOGIN_PENDING});
        feathers.authenticate({
            strategy: 'local',
            email: email,
            password: password
        })
        .then((values)=>{
            console.log("Login Success");
            dispatch({type:userTypes.LOGIN_SUCCESS, payload: values.accessToken});
            Actions.rooms();
            console.log(values.accessToken);
        })
        .catch(e=>{
            dispatch({type:userTypes.LOGIN_REJECTED, payload: e.data.message})
            console.log(e.data.message);
        });
    }
};