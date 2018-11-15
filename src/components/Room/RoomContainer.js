import React from 'react';
import { connect } from 'react-redux';
import { getMessages, addNewMessage } from '../../actions/messages';
import {getRoomRestaurants, clearVotingState} from '../../actions/voting';
import feathersClient from '../../feathers/index';
import { Actions } from 'react-native-router-flux';

import RoomComponent from './RoomComponent';
import { ActionConst } from 'react-native-router-flux';

class RoomContainer extends React.Component {
    constructor(props) {
        super(props);
        const { _addNewMessage } = this.props;

        const callback = (message, context) => {
            _addNewMessage(message);
            console.log(message);
        };
        feathersClient.service('messages').on('newMessage', callback);
    }
    componentWillMount(){
        this.props._clearVotingState();
        console.log(this.props.restaurants);
    }
    componentDidMount() {
        const { _getRestaurants, _getMessages, _clearVotingState, room: { id, roomName, roomCode } } = this.props;
        
        _getMessages(id);
        _getRestaurants(id);
    }

    componentWillUnmount() {
        feathersClient.service('messages').removeAllListeners("created");
    }

    render() {
        const { room, messages } = this.props;

        return (<RoomComponent room={room} messages={messages} />);
    }
}


const mapStatetoProps = (state) => {
    return {
        messages: state.messages,
        restaurants: state.user.restaurants
    };
};

const mapDispatchToProps = (dispatch) => ({
    _getMessages: (roomId) => dispatch(getMessages(roomId)),
    _addNewMessage: (message) => dispatch(addNewMessage(message)),
    _getRestaurants: (roomId) => dispatch(getRoomRestaurants(roomId)),
    _clearVotingState: () => dispatch(clearVotingState()),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomContainer);