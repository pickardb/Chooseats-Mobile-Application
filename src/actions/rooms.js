import feathersClient from '../feathers/index';
import { Actions } from 'react-native-router-flux';
import React from 'react';


import roomTypes from '../types/rooms';

const roomsService = feathersClient.service('rooms');

export const getRooms = async (dispatch) => {
    try {
        await dispatch({
            type: roomTypes.GET_ROOMS,
            payload: roomsService.find({
                query: {
                    $limit: 25
                }
            })
        });
    } catch (err) {
        console.log(err);
    }
};

export const createRoom = (newRoomName, newRoomDesc, newRoomVote, newRoomMax) => async (dispatch) => {
    console.log("Create room values:" + newRoomName + " " + newRoomDesc);
    console.log("dispatch: " + dispatch);
    try {
        await dispatch({
            type: roomTypes.CREATE_ROOM,
            payload: roomsService.create({
                roomName: newRoomName,
                roomDesc: newRoomDesc,
                roomType: newRoomVote,
                roomMac: newRoomMax,
            })
        });
    } catch (err) {
        console.log(err);
    }
};

export const updateJoinRoomCode = (text) => {
    return {
        type: roomTypes.JOIN_ROOM_UPDATED,
        payload: text
    };
};

export const joinRoom = async (values, dispatch) => {
    console.log(values);
    const { roomCode } = values;
    try {
        await dispatch({
            type: roomTypes.JOIN_ROOM,
            payload: roomsService.patch(roomCode, { roomCode })
        })
            .then(Actions.roomList());
    }
    catch (err) {
        console.log(err);
    }
};

export const updateNewRoomName = (text) => {
    return ({
        type: roomTypes.NEW_ROOM_NAME,
        payload: text
    });
};

export const updateNewRoomDesc = (text) => {
    return ({
        type: roomTypes.NEW_ROOM_DESC,
        payload: text
    });
};

export const updateNewRoomMax = (text) => {
    return ({
        type: roomTypes.NEW_ROOM_MAX,
        payload: text
    });
};

export const updateNewRoomVote = (text) => {
    return({
        type: roomTypes.NEW_ROOM_VOTE,
        payload: text
    });
};
export const setCurrentRoom = (id) => {
    return ({
        type: roomTypes.SET_CURRENT_ROOM,
        payload: id
    });
}
