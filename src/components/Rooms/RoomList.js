import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { CardSection, Button } from '../common';
import RoomListItem from './RoomListItem';
import { getRooms } from '../../actions/rooms';
import { Actions } from 'react-native-router-flux';

class RoomList extends Component {
    componentWillMount() {
        this.props._getRooms();
        Actions.refresh({key: 'roomList'})
    }

    renderRooms(rooms) {
        if (rooms.data != undefined) {
            return rooms.data.map(room =>
                <RoomListItem key={room.id} roomName={room.roomCode} id={room.id} />);
        }
    }

    render() {
        const { rooms } = this.props;

        return (

            <ScrollView>
                {this.renderRooms(rooms)}
                <CardSection>
                    <Button onPress={Actions.roomJoin}>
                        Join a new Room
                </Button>
                </CardSection>
            </ScrollView>
        );
    }
};

const mapStatetoProps = state => {
    return {
        rooms: state.rooms
    };
};

const mapDispatchToProps = dispatch => ({
    _getRooms: () => dispatch(getRooms),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomList);