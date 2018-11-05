import types from '../types/restaurants';
const INITIAL_STATE = {

};

const restaurantReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.RESTAURANT_SELECTED:
            return { selectedRestaurant: action.payload };
        default:
            return state;
    }
};

export default restaurantReducer;
