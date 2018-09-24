import types from '../types/users'

const userReducer = (state = {
    isSigningUp: false
}, action) => {
    switch (action.type) {
        case types.SIGNUP_PENDING:
            return { ...state, isSigningUp: true }
        case types.SIGNUP_SUCCESS:
            return action.payload;
        case types.SIGNUP_REJECTED:
            return { ...state, errors: action.payload.errors, isSigningUp: false }
        default:
            return state;
    }
}

export default userReducer;