import RNGooglePlaces from 'react-native-google-places';

import feathersClient from '../feathers/index';
import restaurantTypes from '../types/restaurants';

export const setSelectedRestaurant = restaurant => dispatch => ({
    type: restaurantTypes.RESTAURANT_SELECTED,
    payload: restaurant
});

export const getRestaurantInformation = (id) => await dispatch => {
    try {
        await dispatch({
            type: restaurantTypes.GET_RESTAURANT,
            payload: RNGooglePlaces.lookUpPlaceByID(id)
        });

    } catch (error) {

    }
};