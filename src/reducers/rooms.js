import types from '../types/rooms'

const roomsReducer = (state = {
    rooms: [],
    isGettingRooms: false,
    newRoom: '',
    isCreatingRoom: false
}, action) => {
    console.log(action);
    switch (action.type) {
        case types.GET_ROOMS:
            return {...state}
        case types.GET_ROOMS_PENDING:
            return { ...state, rooms: [], isGettingRooms: true }
        case types.GET_ROOMS_FULFILLED:
            return { ...action.payload, isGettingRooms: false };
        case types.GET_ROOMS_REJECTED:
            return { ...state, errors: action.payload.errors, isGettingRooms: false }
        case types.CREATE_ROOM:
            return { ...state }
        case types.CREATE_ROOM_PENDING:
            return { ...state, isCreatingRoom: true }
        case types.CREATE_ROOM_FULFILLED:
            return { ...state, newRoom: action.payload.roomId, isCreatingRoom: false }
        case types.CREATE_ROOM_REJECTED:
            return { ...state, errors: action.payload.errors, isCreatingRoom: false }
        default:
            return state;
    }
}

export default roomsReducer;