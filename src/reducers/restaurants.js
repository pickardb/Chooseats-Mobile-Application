import types from '../types/restaurants';
const INITIAL_STATE = {
    restaurant_info: {},
    restaurants: { data: [] },
    isLoading: false,
};

const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RESTAURANT_SELECTED:
            return { selectedRestaurant: action.payload };
        case types.GET_ROOM_RESTAURANTS_PENDING:
            return { ...state, restaurants: { data: [] }, isLoading: true };
        case types.GET_ROOM_RESTAURANTS_FULFILLED:
            return { ...state, restaurants: action.payload, isLoading: false };
        case types.GET_GOOGLE_RESTAURANT_INFO_FULFILLED:
            if (action.payload.placeID) {
                var restaurant_info = { ...state.restaurant_info };
                restaurant_info[action.payload.placeID] = action.payload;

                return { ...state, restaurant_info };
            } else {
                return state
            }
        case types.GET_GOOGLE_ADDITIONAL_RESTAURANT_INFO_FULFILLED:
            var restaurant_info = { ...state.restaurant_info };

            var response = JSON.parse(action.payload.request._response);

            restaurant_info[response.result.place_id].additionalInfo = response.result;

            return { ...state, restaurant_info };
        default:
            return state;
    }
};

export default restaurantReducer;
