import types from '../types/voting';

const INITIAL_STATE = {
    votingStyle: '',
    voteSubmitted: false,
    choice: '',
    rankedChoices: [],
};

const votingReducer = (state=INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type){
        case types.SUBMIT_VOTE: 
            return {...state, voteSubmitted: true};
        case types.UPDATE_CHOICE:
            return {...state, choice: action.payload};
        default:
            return state;
    }
};

export default votingReducer;