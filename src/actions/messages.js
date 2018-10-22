import feathersClient from '../feathers/index';

import messageTypes from '../types/messages';

const messagesService = feathersClient.service('messages');

export const addMessage = (roomId) => async (values, dispatch) => {
    const { text, type } = values;
    try {
        await dispatch({
            type: messageTypes.SEND_MESSAGE,
            payload: messagesService.create({ roomId: id, text, type })
        })
    }
    catch (err) {
        console.log(err);
    }
}

export const getMessages = id => async dispatch => {
    console.log(id);
    try {
        await dispatch({
            type: messageTypes.GET_MESSAGES,
            payload: messagesService.find({ roomId: id })
        })
    }
    catch (err) {
        console.log(err);
    }
}