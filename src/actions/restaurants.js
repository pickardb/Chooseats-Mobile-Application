import RNGooglePlaces from 'react-native-google-places';

import feathersClient from '../feathers/index';
import restaurantTypes from '../types/restaurants';

const restaurantsService = feathersClient.service('restaurants');

export const setSelectedRestaurant = restaurant => dispatch => ({
    type: restaurantTypes.RESTAURANT_SELECTED,
    payload: restaurant
});

export const addRestaurant = (roomId, google_places_id) => await dispatch => {
    try{   
        await dispatch({
            type: restaurantTypes.ADD_RESTAURANT,
            payload: restaurantsService.create({
               roomId,
               google_places_id
              });
        })
    } catch (error) {

    }
}

export const getRestaurantInformation = (id) => await dispatch => {
    try {
        await dispatch({
            type: restaurantTypes.GET_GOOGLE_RESTAURANT_INFO,
            payload: RNGooglePlaces.lookUpPlaceByID(id)
        });

    } catch (error) {

    }
}

export const getRoomRestaurants = (roomId)=> await dispatch => {
    try {
        await dispatch({
            type: restaurantTypes.GET_ROOM_RESTAURANTS,
            payload: restaurantsService.find({
                query: {
                  roomId: roomId
                }
              });
        });

    } catch (error) {

    }
}