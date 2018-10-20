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
    try{
        await dispatch({
            type: roomTypes.CREATE_ROOM,
            payload: roomsService.create({})
        })
    } catch(err){
        console.log(err);
    }
};

export const updateJoinRoomCode = (text) => {
    return{
        type: roomTypes.JOIN_ROOM_UPDATED,
        payload: text
    };
};

export const joinRoom = async (dispatch, roomCode) => {
    console.log(roomCode);
    var roomString = roomCode.toString();
    
    console.log("Code: " + roomString.substr(0,6));
    console.log("Id: " + roomString.substr(6,1));

    var code = roomString.substring(0,5);
    var id = roomString.substring(6,roomString.length-1);
    try{
        await dispatch({
            type: roomTypes.JOIN_ROOM,
            payload: roomsService.patch(id,{roomCode: code})
        })
    }
    catch(err){
        console.log(err);
    }
};