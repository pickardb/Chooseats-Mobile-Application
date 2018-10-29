import types from '../types/users'
const INITIAL_STATE = {
    isSigningUp: false,
    email: '',
    password: '',
    error: '',
    isLoggingIn: false,
    isNew: false
}

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.SIGNUP_PENDING:
            return { ...state, isSigningUp: true };
        case types.SIGNUP_FULFILLED:
            return action.payload;
        case types.SIGNUP_REJECTED:
            return { ...state, errors: action.payload.errors, isSigningUp: false };
        case types.LOGIN_PENDING:
            return { ...state, isLoggingIn: true };
        case types.LOGIN_FULFILLED:
            return { ...state, ...action.payload, isLoggingIn: false, password: null, isNew: false };
        case types.LOGIN_REJECTED:
            return { ...state, errors: action.payload.errors, isLoggingIn: false };
        case types.LOGOUT_FULFILLED:
            return { ...state, password: action.payload, isNew: false };
        case types.NEW_USER:
            return { ...state, isNew: true };
        case types.LOGOUT_FULFILLED:
            return INITIAL_STATE;
        case types.NEW_USER:
            return { ...state, isNew: true };
        default:
            return state;
    }
}

export default userReducer;