import * as types from '../types/users'
const userReducer = (state = {
    isSigningUp: false,
    email: '',
    password: '',
    error: '',
    isLogginIn: false

}, action) => {
    console.log(action);
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
        default:
            return state;
    }
}

export default userReducer;