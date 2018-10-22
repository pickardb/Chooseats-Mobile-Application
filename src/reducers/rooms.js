import types from '../types/rooms'

const roomsReducer = (state = {
    rooms: [],
    isGettingRooms: false,
    newRoom: '',
    isCreatingRoom: false,
    joinRoomCode: '',
    newRoomName: '',
    newRoomDesc: '',
}, action) => {
    console.log(action);
    switch (action.type) {
        case types.GET_ROOMS:
            return { ...state }
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
            return { ...state, newRoom: action.payload.roomCode, isCreatingRoom: false }
        case types.CREATE_ROOM_REJECTED:
            return { ...state, errors: action.payload.errors, isCreatingRoom: false }
        case types.JOIN_ROOM_UPDATED:
            return { ...state, joinRoomCode: action.payload }
        case types.NEW_ROOM_NAME:
            return {...state, newRoomName: action.payload}
        case types.NEW_ROOM_DESC:
            return {...state, newRoomDesc: action.payload}
        default:
            return state;
    }
}

export default roomsReducer;