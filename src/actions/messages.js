import feathersClient from '../feathers/index';
import uuidv1 from 'uuid/v1';

import messageTypes from '../types/messages';

const messagesService = feathersClient.service('messages');

export const sendMessage = (roomId, user) => async (values, dispatch) => {
    const { text } = values;

    const localMessageId = uuidv1()

    //Disabled for now as we are not storing user email in our store on persisted start
    //dispatch(addLocalMessage({ text, id: localMessageId }));
    try {
        await dispatch({
            type: messageTypes.SEND_MESSAGE,
            payload: messagesService.create({ roomId: roomId, text, type: "user" })
        })
        //Disabled for now
        //dispatch(removeLocalMessage(localMessageId));
    }
    catch (err) {

        // Should change localMessage status
        console.log(err);
    }
}

export const addNewMessage = (message) => {
    return {
        type: messageTypes.ADD_NEW_MESSAGE_FROM_SERVER,
        payload: message
    };
}

export const addLocalMessage = (message) => {
    return {
        type: messageTypes.ADD_LOCAL_MESSAGE,
        payload: message
    };
}

export const removeLocalMessage = (id) => {
    return {
        type: messageTypes.REMOVE_LOCAL_MESSAGE,
        payload: id
    };
}

export const getMessages = id => async dispatch => {
    try {
        await dispatch({
            type: messageTypes.GET_MESSAGES,
            payload: messagesService.find({ query: { roomId: id, $sort: -1, $limit: 30 } })
        })
    }
    catch (err) {
        console.log(err);
    }
}