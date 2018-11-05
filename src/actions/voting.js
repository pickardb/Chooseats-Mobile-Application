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