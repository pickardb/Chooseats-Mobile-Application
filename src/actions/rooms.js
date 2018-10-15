import feathersClient from '../feathers/index';
import { Actions } from 'react-native-router-flux';

import roomTypes from '../types/rooms';

const roomsService = feathersClient.service('rooms');

export const getRooms = async (dispatch) => {
    try {
        await dispatch({
            type: roomTypes.GET_ROOMS,
            payload: roomsService.find()
        });
    } catch (err) {
        console.log(err);
    }
};

