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

export const createRoom = async (dispatch, values) => {
    try {
        await dispatch({
            type: roomTypes.CREATE_ROOM,
            payload: roomsService.create({roomName: values.name, roomDesc: values.description})
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