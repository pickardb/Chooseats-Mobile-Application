import React from 'react';
import { connect } from 'react-redux';
import { getMessages, addNewMessage, sendMessage2 } from '../../actions/messages';
import { clearVotingState, startVoting, updateVotingState } from '../../actions/voting';
import { getRoomRestaurants } from '../../actions/restaurants';
import { getRooms } from '../../actions/rooms'
import feathersClient from '../../feathers/index';
import { Actions } from 'react-native-router-flux';

import RoomComponent from './RoomComponent';
import { ActionConst } from 'react-native-router-flux';

class RoomContainer extends React.Component {
    constructor(props) {
        super(props);
        const { _addNewMessage, _updateVotingState,_getMessages, rooms } = this.props;

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
        };
        feathersClient.service('rooms').on('patched', roomCallback);

        const restaurantCallback = () => {
            console.log("Restaurant Added");
            this.props._getRooms();
            //_getMessages(rooms.currentRoomId);
            this.props._getRestaurants(rooms.currentRoomId);
        }
        feathersClient.service('restaurants').on('created', restaurantCallback);
    }
    componentWillMount() {
        this.props._clearVotingState();
    }
    componentDidMount() {
        const { _getRestaurants, _getMessages, rooms } = this.props;

        _getMessages(rooms.currentRoomId);
        _getRestaurants(rooms.currentRoomId);
    }

    componentWillUnmount() {
        feathersClient.service('messages').removeAllListeners("newMessage");
        feathersClient.service('rooms').removeAllListeners('patched');
        feathersClient.service('restaurants').removeAllListeners('created');
        this.props._getRooms();
        Actions.refresh({ key: 'roomList' });
    }

    render() {
        const { user, messages, restaurant_info, _sendMessage2, rooms, index } = this.props;

        return (<RoomComponent sendMessage={_sendMessage2} user={user} restaurant_info={restaurant_info} startVoting={this.props._startVoting} getRooms={this.props._getRooms} room={rooms.data[index]} messages={messages} roomState={this.props.roomState} />);
    }
}


const mapStatetoProps = (state) => {
    return {
        messages: state.messages,
        restaurants: state.restaurants.restaurants,
        roomState: state.voting.votingState,
        restaurant_info: state.restaurants.restaurant_info,
        rooms: state.rooms,
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    _sendMessage2: (values, roomId) => dispatch(sendMessage2(values, roomId)),
    _getMessages: (roomId) => dispatch(getMessages(roomId)),
    _addNewMessage: (message) => dispatch(addNewMessage(message)),
    _getRestaurants: (roomId) => dispatch(getRoomRestaurants(roomId)),
    _clearVotingState: () => dispatch(clearVotingState()),
    _startVoting: (room) => dispatch(startVoting(room)),
    _updateVotingState: (room) => dispatch(updateVotingState(room)),
    _getRooms: () => dispatch(getRooms),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomContainer);