import votingTypes from '../types/voting'
import RNGooglePlaces from 'react-native-google-places';

import feathersClient from '../feathers/index';

const restaurantsService = feathersClient.service('restaurants');
const votingService = feathersClient.service('votes');


export const chooseVote = (item) => {
    return {
        type: votingTypes.UPDATE_CHOICE,
        payload: item
    };
};

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
                roomId: room.roomCode,
                text: "Text",
                userId: null,
                restaurantId: choice.placeID
            })
        });
    }
    catch (err) {
        console.log("Error with submit vote: " + err);
    }

};

export const submitRankedVote = (rankedChoices, restaurant_info, currentRoom) => async(dispatch) => {
    console.log("rankedChoices is: ");
    console.log(rankedChoices);
    console.log("restaurant_info is: ");
    console.log(restaurant_info);
    console.log("room is: ");
    console.log(currentRoom);

    //For each restaurant being voted on
    for(var i = 0; i<rankedChoices.length; i++){
        //Submit total-rank votes
        //Ex. 3 total restaurants
        //rank 1 receives (3-1)=2 votes
        //rank 2 receives (3-2)=1 votes
        //rank 3 receives (3-3)=0 votes
        for(var j = 0; j<rankedChoices.length - rankedChoices[i]; j++){
            console.log("restaurant is: ");
            console.log(restaurant_info[Object.keys(restaurant_info)[i]]);
            try {
                await dispatch({
                    type: votingTypes.SINGLE_SUBMIT_VOTE,
                    payload: votingService.create({
                        roomId: currentRoom.roomCode,
                        text: "Text",
                        userId: null,
                        restaurantId: restaurant_info[Object.keys(restaurant_info)[i]].placeID
                    })
                });
            }
            catch (err) {
                console.log("Error with submit vote: " + err);
            }
        
        }
    }
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