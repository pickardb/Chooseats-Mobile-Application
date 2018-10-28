import React from 'react';
import { connect } from 'react-redux';
import { getMessages, addNewMessage } from '../../actions/messages';
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

    componentDidMount() {
        const { _getMessages, room: { id, roomName, roomCode } } = this.props;
        _getMessages(id);
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
        messages: state.messages
    };
};

const mapDispatchToProps = (dispatch) => ({
    _getMessages: (roomId) => dispatch(getMessages(roomId)),
    _addNewMessage: (message) => dispatch(addNewMessage(message))

});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomContainer);