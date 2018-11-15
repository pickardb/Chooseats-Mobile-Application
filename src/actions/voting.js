import votingTypes from '../types/voting'
import RNGooglePlaces from 'react-native-google-places';

import feathersClient from '../feathers/index';

const restaurantsService = feathersClient.service('restaurants');


export const chooseVote = (item) => {
    return {
        type: votingTypes.UPDATE_CHOICE,
        payload: item.name
    };
};

export const submitVote = () => {
    console.log("Reached submitVote");
    return {
        type: votingTypes.SINGLE_SUBMIT_VOTE,
        payload: ''
    };

};

export const submitRankedVote = () => {

    return {
        type: votingTypes.RANKED_SUBMIT_VOTE,
        payload: ''
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

export const getRestaurantInformation = (id) => dispatch => {
    return dispatch({
        type: votingTypes.GET_GOOGLE_RESTAURANT_INFO,
        payload: RNGooglePlaces.lookUpPlaceByID(id)
    });
}

const getRestaurants = async (roomId, dispatch) => {
    const result = await restaurantsService.find({
        query: {
            roomId
        }
    });

    await Promise.all(result.data.map(restaurant => {
        return dispatch(getRestaurantInformation(restaurant.google_places_id));
    }));

    return result;
}

export const getRoomRestaurants = (roomId) => dispatch => {
    console.log(roomId);
    return dispatch({
        type: votingTypes.GET_ROOM_RESTAURANTS,
        payload: getRestaurants(roomId, dispatch)
    })
}

export const clearVotingState = () => {
    console.log("Clearing Voting State");
    return {
        type: votingTypes.CLEAR_VOTING_STATE
    };
};