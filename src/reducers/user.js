import * as types from '../types/users'
const userReducer = (state = {
    isSigningUp: false,
    email: '',
    password: '',
    error: '',
    isLogginIn: false

}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case types.SIGNUP_PENDING:
            return { ...state, isSigningUp: true }
        case types.SIGNUP_SUCCESS:
            return action.payload;
        case types.SIGNUP_REJECTED:
            return { ...state, errors: action.payload.errors, isSigningUp: false }
        case types.EMAIL_CHANGED:
            return{...state, email: action.payload}
        case types.PASSWORD_CHANGED:
            return{...state, password: action.payload}
        case types.LOGIN_PENDING: 
            return {...state, isLogginIn: true}
        case types.LOGIN_SUCCESS:
            return {...state, email: '', password: '', error: '', isLogginIn: false}
        case types.LOGIN_REJECTED:
            return {...state, password: '', isLogginIn: '', error: action.payload, isLogginIn: false}
        default:
            return state;
    }
}

export default userReducer;