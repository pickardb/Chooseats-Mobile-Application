import types from '../types/rooms'

const roomsReducer = (state = {
    rooms: [],
    isGettingRooms: false,
}, action) => {
    console.log(action);
    switch (action.type) {
        case types.GET_ROOMS_PENDING:
            return { ...state, isGettingRooms: true }
        case types.GET_ROOMS_FULFILLED:
            return { ...action.payload, isGettingRooms: false };
        case types.GET_ROOMS_REJECTED:
            return { ...state, errors: action.payload.errors, isGettingRooms: false }
        default:
            return state;
    }
}

export default roomsReducer;