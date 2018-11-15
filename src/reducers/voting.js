import types from '../types/voting';

const INITIAL_STATE = {
    votingStyle: '',
    voteSubmitted: false,
    choice: '',
    rankedChoices: null,
    restaurants: { data: [] },
    restaurantsLoading: false,
    restaurant_info: {},
};

const updateArray = (state, i, rank) => {
    var retArray = [];
    console.log("rankedChoices.length is :" + state.rankedChoices.length);
    for(var j = 0; j<state.rankedChoices.length; j++){
        if(j==i){
            retArray[j]=rank;
        }
        else{
            retArray[j]=state.rankedChoices[j];
        }
    }
    console.log("Ret Array:" + retArray);
    return retArray;
};

const votingReducer = (state=INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case types.SINGLE_SUBMIT_VOTE: 
            return {...state, voteSubmitted: true};
        case types.RANKED_SUBMIT_VOTE:
            return {...state, voteSubmitted: true};
        case types.UPDATE_CHOICE:
            return {...state, choice: action.payload};
        case types.UPDATE_RANKED_VOTE:
            return {...state, rankedChoices: updateArray(state, action.payload.index, action.payload.rank)}
        case types.SET_REDUX_ARRAY:
            return {...state, rankedChoices: action.payload }
            case types.GET_ROOM_RESTAURANTS_PENDING:
            return { ...state, restaurantsLoading: true };
        case types.GET_ROOM_RESTAURANTS_FULFILLED:
            return { ...state, restaurants: action.payload.data, restaurantsLoading: false };
        case types.GET_GOOGLE_RESTAURANT_INFO_FULFILLED:
            if (action.payload.placeID) {
                var restaurant_info = { ...state.restaurant_info };
                restaurant_info[action.payload.placeID] = action.payload;

                return { ...state, restaurant_info };
            } else {
                return state
            }
        case types.CLEAR_VOTING_STATE: 
            return{INITIAL_STATE, restaurant_info: {}, restaurants: {data: []} }
        default:
            return state;
    }
};

export default votingReducer;