import React, { Component } from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import { Button } from 'react-native-elements';
import RoomListItem from './RoomListItem';
import { getRooms, setCurrentRoom } from '../../actions/rooms';
import { Actions } from 'react-native-router-flux';
import RoomListActionButton from './RoomListActionButton'

const backgroundImage = require('./assets/Chooseats_Logo_Tall_Bottom.png');

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
};

class RoomList extends Component {
    componentWillMount() {
        this.props._getRooms();
        Actions.refresh({ key: 'roomList' });
        console.log(this.props);
    }

    renderRooms(rooms) {
        if (rooms.data != null) {
            return rooms.data.map((room, index) =>
                <RoomListItem
                    key={room.id}
                    room={room}
                    setCurrentRoomHandler={() => this.props._setCurrentRoom(room.id)}
                    accessibilityLabel={room.roomCode}
                    index={index}
                />);
        }
    }

    render() {
        const { rooms } = this.props;

        return (
            <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>
                <ScrollView>
                    {this.renderRooms(rooms)}
                </ScrollView>
                <RoomListActionButton />
            </ImageBackground>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        rooms: state.rooms
    };
};

const mapDispatchToProps = (dispatch) => ({
    _getRooms: () => dispatch(getRooms),
    _setCurrentRoom: (id) => dispatch(setCurrentRoom(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomList);

