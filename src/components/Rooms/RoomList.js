import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Card } from '../common';
import RoomListItem from './RoomListItem';

class RoomList extends Component {
    state = { rooms: [] };

    componentWillMount() {
        this.state.rooms[1] = "Test 1";
        this.state.rooms[2] = "Test 2";
    }

    renderRooms() {
        return this.state.rooms.map(room =>
            <RoomListItem key={room} roomName={room} />);
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderRooms()}
            </ScrollView>
        );
    }
};

export default RoomList;