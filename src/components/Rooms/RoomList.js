import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import {connect} from 'react-redux';
import { Card } from '../common';
import RoomListItem from './RoomListItem';
import {getRooms} from '../../actions/rooms';

class RoomList extends Component {
    componentWillMount() {
        this.props._getRooms();
    }

    renderRooms(rooms) {
        return rooms.data.map(room =>
            <RoomListItem key={room.id} roomName={room.roomId} />);
    }

    render() {
    const { rooms } = this.props;

        return (
            <ScrollView>
                {this.renderRooms(rooms)}
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

export default connect(mapStatetoProps,mapDispatchToProps)(RoomList);