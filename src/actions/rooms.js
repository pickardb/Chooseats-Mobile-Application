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
                    $limit: 20
                }
            })
        });
    } catch (err) {
        console.log(err);
    }
};

export const createRoom = async (dispatch) => {
    try {
        await dispatch({
            type: roomTypes.CREATE_ROOM,
            payload: roomsService.create({})
        })
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

export const joinRoom = (roomCode) => async (dispatch) => {
    console.log(roomCode.substring(0, 5));
    console.log(roomCode.substring(6, 7));

    var code = roomCode.substring(0, 5);
    var id = roomCode.substring(6, roomCode.length - 1);
    console.log(code + " " + id);
    try {
        await dispatch({
            type: roomTypes.JOIN_ROOM,
            payload: roomsService.patch(roomCode, { roomCode: roomCode })
        })
    }
    catch (err) {
        console.log(err);
    }
};