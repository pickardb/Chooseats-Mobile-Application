import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import {Button} from 'react-native-elements';
import RoomListItem from './RoomListItem';
import { getRooms } from '../../actions/rooms';
import { Actions } from 'react-native-router-flux';

class RoomList extends Component {
    componentWillMount() {
        this.props._getRooms();
        Actions.refresh({ key: 'roomList' })
    }

    renderRooms(rooms) {
        if (rooms.data != undefined) {
            return rooms.data.map(room =>
                <RoomListItem key={room.id} room={room} />);
        }
    }

    render() {
        const { rooms } = this.props;

        return (

            <ScrollView>
                <Button
                    buttonStyle={{
                        marginVertical: 10,
                        backgroundColor: '#c67f00',
                        elevation: 5
                    }}
                    large title='Join a New Room'
                    onPress={Actions.roomJoin}
                />
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

export default connect(mapStatetoProps, mapDispatchToProps)(RoomList);