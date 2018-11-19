import React from 'react';
import { connect } from 'react-redux';
import { getMessages, addNewMessage } from '../../actions/messages';
import {getRoomRestaurants, clearVotingState, startVoting, updateVotingState} from '../../actions/voting';
import {getRooms} from '../../actions/rooms'
import feathersClient from '../../feathers/index';
import { Actions } from 'react-native-router-flux';

import RoomComponent from './RoomComponent';
import { ActionConst } from 'react-native-router-flux';

class RoomContainer extends React.Component {
    constructor(props) {
        super(props);
        const { _addNewMessage, _updateVotingState } = this.props;

        const callback = (message, context) => {
            _addNewMessage(message);
            console.log(message);
        };
        feathersClient.service('messages').on('newMessage', callback);

        const roomCallback = (room, context) => {
            console.log("roomCallback");
            console.log(room);
            _updateVotingState(room.roomState);
            this.props._getRooms();
            Actions.refresh({key: "roomContainer"});
        };
        feathersClient.service('rooms').on('patched', roomCallback);
    }
    componentWillMount(){
        this.props._clearVotingState();
        console.log(this.props.restaurants);
    }
    componentDidMount() {
        const { _getRestaurants, _getMessages, room: { id, roomName, roomCode } } = this.props;
        
        _getMessages(id);
        _getRestaurants(id);
    }

    componentWillUnmount() {
        feathersClient.service('messages').removeAllListeners("created");
    }

    render() {
        const { room, messages } = this.props;

        return (<RoomComponent startVoting = {this.props._startVoting} room={room} messages={messages} roomState = {this.props.roomState}/>);
    }
}


const mapStatetoProps = (state) => {
    return {
        messages: state.messages,
        restaurants: state.user.restaurants,
        roomState: state.voting.votingState
    };
};

const mapDispatchToProps = (dispatch) => ({
    _getMessages: (roomId) => dispatch(getMessages(roomId)),
    _addNewMessage: (message) => dispatch(addNewMessage(message)),
    _getRestaurants: (roomId) => dispatch(getRoomRestaurants(roomId)),
    _clearVotingState: () => dispatch(clearVotingState()),
    _startVoting: (room) => dispatch(startVoting(room)),
    _updateVotingState: (room) => dispatch(updateVotingState(room)),
    _getRooms: () => dispatch(getRooms),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomContainer);