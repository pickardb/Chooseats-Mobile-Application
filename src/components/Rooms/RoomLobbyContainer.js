import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, ImageBackground } from 'react-native';
import { Card, CardSection } from '../common';
import { Button } from 'react-native-elements';
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
                <Button
                    buttonStyle={{
                        marginTop: 10,
                        backgroundColor: '#c67f00',
                        elevation: 5
                    }}
                    large title='Room List'
                    onPress={Actions.roomList}
                />
                <Button
                    buttonStyle={{
                        marginTop: 10,
                        backgroundColor: '#c67f00',
                        elevation: 5
                    }}
                    large title='Logout'
                    onPress={this.handleLogout}
                />
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
        flexDirection: 'column',
        borderRadius: 5,
        opacity: 0.8
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        paddingBottom: 25,
    },
};
