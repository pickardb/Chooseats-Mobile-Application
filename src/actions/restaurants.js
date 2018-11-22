import RNGooglePlaces from 'react-native-google-places';
import axios from 'axios';

import feathersClient from '../feathers/index';
import restaurantTypes from '../types/restaurants';

const restaurantsService = feathersClient.service('restaurants');

export const setSelectedRestaurant = restaurant => dispatch => ({
    type: restaurantTypes.RESTAURANT_SELECTED,
    payload: restaurant
});

export const addRestaurant = (roomId, google_places_id) => async dispatch => {
    try {
        await dispatch({
            type: restaurantTypes.ADD_RESTAURANT,
            payload: restaurantsService.create({
                roomId,
                google_places_id
            })
        })
        dispatch(getRoomRestaurants(roomId));
    } catch (error) {

    }
}

export const getRestaurantInformation = (id) => async dispatch => {
    await dispatch({
        type: restaurantTypes.GET_GOOGLE_RESTAURANT_INFO,
        payload: RNGooglePlaces.lookUpPlaceByID(id)
    });

    return dispatch({
        type: restaurantTypes.GET_GOOGLE_ADDITIONAL_RESTAURANT_INFO,
        payload: axios.get('https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyDPby2X44nOJt8mF3VAriIIwHETjtIIwKM&placeid=' + id)
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
        type: restaurantTypes.GET_ROOM_RESTAURANTS,
        payload: getRestaurants(roomId, dispatch)
    })
}

