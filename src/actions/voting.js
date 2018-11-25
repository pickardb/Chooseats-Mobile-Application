import votingTypes from '../types/voting'
import RNGooglePlaces from 'react-native-google-places';

import feathersClient from '../feathers/index';
import { Actions } from 'react-native-router-flux';

const restaurantsService = feathersClient.service('restaurants');
const votingService = feathersClient.service('votes');


export const chooseVote = (item) => {
    return {
        type: votingTypes.UPDATE_CHOICE,
        payload: item
    };
};

export const startVoting = (room) => async (dispatch) => {
    var path = 'rooms';
    const roomVotingService = feathersClient.service(path);

    try {
        await dispatch({
            type: votingTypes.START_VOTE,
            payload: roomVotingService.patch(room.id, {
                roomId: room.id,
                roomState: "voting"
            })
        })
    } catch (err) {
        console.log("Error with startVoting: " + err);
    }
};

export const submitReadyService = (room) =>
    async (dispatch) => {
        const readyService = feathersClient.service('ready');
        try {
            await dispatch({
                type: votingTypes.SUBMIT_READY,
                payload: readyService.create({ roomId: room.id })
            })
            //Actions.pop();
        }
        catch (err) {
            console.log("Problem with readyService");
        }

    }

export const submitVote = (choice, room) =>
    async (dispatch) => {
        console.log("Reached submitVote");
        console.log("Choice is: ");
        console.log(choice);
        console.log("room is: ");
        console.log(room);
        try {
            await dispatch({
                type: votingTypes.SINGLE_SUBMIT_VOTE,
                payload: votingService.create({
                    roomId: room.id,
                    text: "Text",
                    restaurantId: choice
                })
            })
        } catch (err) {
            console.log("Error with submit vote: " + err);
        }
    };

export const submitRankedVote = (rankedChoices, restaurants, currentRoom) => async (dispatch) => {
    const readyService = feathersClient.service('ready');
    //For each restaurant being voted on
    for (var i = 0; i < rankedChoices.length; i++) {
        //Submit total-rank votes
        //Ex. 3 total restaurants
        //rank 1 receives (3-1)=2 votes
        //rank 2 receives (3-2)=1 votes
        //rank 3 receives (3-3)=0 votes
        for (var j = 0; j < rankedChoices.length - rankedChoices[i] + 1; j++) {
            try {
                await dispatch({
                    type: votingTypes.RANKED_SUBMIT_VOTE,
                    payload: votingService.create({
                        roomId: currentRoom.id,
                        text: "Text",
                        restaurantId: restaurants.data[i].id
                    })
                });
            }
            catch (err) {
                console.log("Error with submit vote: " + err);
            }

        }
    }
    return {
        type: votingTypes.SUBMIT_READY,
        payload: readyService.create({ roomId: currentRoom.id })
    };

};

export const rankedUpdate = (index, rank) => {
    console.log("Ranked vote update: " + index + " " + rank);
    return {
        type: votingTypes.UPDATE_RANKED_VOTE,
        payload: { index: index, rank: rank }
    };
};

export const setReduxArray = (size) => {
    console.log("runningSetReduxArray");
    var retArray = []
    for (var i = 0; i < size; i++) {
        retArray[i] = 1;
    }

    return {
        type: votingTypes.SET_REDUX_ARRAY,
        payload: retArray
    };
};
export const clearVotingState = () => {
    console.log("Clearing Voting State");
    return {
        type: votingTypes.CLEAR_VOTING_STATE
    };
};

export const updateVotingState = (roomState) => {

    return {
        type: votingTypes.UPDATE_VOTING_STATE,
        payload: roomState
    };
};

