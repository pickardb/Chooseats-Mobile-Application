import votingTypes from '../types/voting'

export const chooseVote = (item) => {
    return{
        type: votingTypes.UPDATE_CHOICE,
        payload: item.itemName
    };
};

export const submitVote = () => {
    console.log("Reached submitVote");
    return{
        type: votingTypes.SUBMIT_VOTE,
        payload: ''
    };
};

export const rankedUpdate = (index, rank) => {
    console.log("Ranked vote update: " + index +" "+ rank);
    return{
        type: votingTypes.UPDATE_RANKED_VOTE,
        payload: {index: index, rank: rank}
    };
};

export const setReduxArray = (size) => {
    var retArray=[]
    for(var i = 0; i<size; i++){
        retArray[i]=1;
    }
    
    return {
        type: votingTypes.SET_REDUX_ARRAY,
        payload: retArray
    };
};
