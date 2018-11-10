import types from '../types/voting';

const INITIAL_STATE = {
    votingStyle: '',
    voteSubmitted: false,
    choice: '',
    rankedChoices: null,
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
    console.log("Ranked Choices is: " + state.rankedChoices)
    switch(action.type){
        case types.SUBMIT_VOTE: 
            return {...state, voteSubmitted: true};
        case types.UPDATE_CHOICE:
            return {...state, choice: action.payload};
        case types.UPDATE_RANKED_VOTE:
            return {...state, rankedChoices: updateArray(state, action.payload.index, action.payload.rank)}
        case types.SET_REDUX_ARRAY:
            return {...state, rankedChoices: action.payload }
        default:
            return state;
    }
};

export default votingReducer;