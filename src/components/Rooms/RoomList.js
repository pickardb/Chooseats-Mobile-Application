import React, { Component } from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from '../common';
import { Button } from 'react-native-elements';
import RoomListItem from './RoomListItem';
import { getRooms } from '../../actions/rooms';
import { Actions } from 'react-native-router-flux';

const backgroundImage = require('./assets/Chooseats_Logo_Tall_Bottom.png');

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        paddingBottom: 25,
    },
};

class RoomList extends Component {
    componentWillMount() {
        this.props._getRooms();
        Actions.refresh({ key: 'roomList' });
    }

    renderRooms(rooms) {
        if (rooms.data != null) {
            return rooms.data.map((room) =>
                <RoomListItem key={room.id} room={room} />);
        }
    }

    render() {
        const { rooms } = this.props;

        return (
            <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>
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
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomList);

