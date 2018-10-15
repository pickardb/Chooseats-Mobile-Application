import types from '../types/users'
const userReducer = (state = {
    isSigningUp: false,
    email: '',
    password: '',
    error: '',
    isLoggingIn: false

}, action) => {
    console.log(action);
    console.log(state);
    switch (action.type) {
        case types.SIGNUP_PENDING:
            return { ...state, isSigningUp: true }
        case types.SIGNUP_FULFILLED:
            return action.payload;
        case types.SIGNUP_REJECTED:
            return { ...state, errors: action.payload.errors, isSigningUp: false }
        case types.LOGIN_PENDING:
            return { ...state, isLoggingIn: true }
        case types.LOGIN_FULFILLED:
            return { ...state, ...action.payload, isLoggingIn: false, password: null };
        case types.LOGIN_REJECTED:
            return { ...state, errors: action.payload.errors, isLoggingIn: false }

        case types.EMAIL_CHANGED:
            return { ...state, email: action.payload }
        case types.PASSWORD_CHANGED:
<<<<<<< HEAD
            return{...state, password: action.payload}
        case types.LOGIN_PENDING: 
            return {...state, isLogginIn: true}
        case types.LOGIN_SUCCESS:
            return {...state, email: '', password: '', error: '', isLogginIn: false}
        case types.LOGIN_REJECTED:
            return {...state, password: '', isLogginIn: '', error: action.payload, isLogginIn: false}
=======
            return { ...state, password: action.payload }
>>>>>>> 8c50cefceb0d3a15b40fca4fa6a6f795c9510c90
        default:
            return state;
    }
}

export default userReducer;