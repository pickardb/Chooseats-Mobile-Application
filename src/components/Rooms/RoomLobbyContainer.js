import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground } from 'react-native';
import { Button, Card, CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

import { getRooms } from '../../actions/rooms';
import { logout } from '../../actions/users';

const backgroundImage = require('./assets/Chooseats_Logo_Tall_Bottom.png');

class RoomLobbyContainer extends Component {
    componentWillMount() {
        const { _getRooms } = this.props;
        _getRooms();
    }

    handleLogout = () => {
        const { _logout } = this.props;
        _logout();
    }

    render() {
        return (
            <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>
                <CardSection style={styles.textContainerStyle}>
                    < Text style={styles.titleTextStyle}>
                        Welcome to Chooseats!
                </Text>
                    <Text style={styles.subtitleTextStyle}>
                        Press the button below to access your list of rooms!
                </Text>
                </CardSection>
                <CardSection>
                    <Button onPress={Actions.roomList}>
                        Room List
                </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.handleLogout}>
                        Logout
                </Button>
                </CardSection>
            </ImageBackground>)
    }
}

const mapStateToProps = state => ({
    rooms: state.rooms,
    user: state.user
});

const mapDispatchToProps = dispatch => ({
    _getRooms: () => dispatch(getRooms),
    _logout: () => dispatch(logout)
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomLobbyContainer);

const styles = {
    titleTextStyle: {
        fontSize: 22,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    subtitleTextStyle: {
        fontSize: 18,
        color: 'black',
        textAlign: 'center'
    },
    textContainerStyle: {
        flexDirection: 'column'
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        paddingBottom: 25
    },
};
