import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from '../common';
import { Actions } from 'react-native-router-flux';

import { getRooms } from '../../actions/rooms';
import { logout } from '../../actions/users';

class RoomLobbyContainer extends Component {
    componentWillMount() {
        const { _getRooms } = this.props;
        _getRooms();
    }

    handleLogout = () => {
        const { _logout } = this.props;
        Actions.reset('landingScene');
        _logout();
    }

    render() {
        return (<View>
            <CardSection>
                <Text>
                    This will be our app home screen.
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
        </View>)
    }
}

const mapStateToProps = state => ({
    rooms: state.rooms,
});

const mapDispatchToProps = dispatch => ({
    _getRooms: () => dispatch(getRooms),
    _logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(RoomLobbyContainer);
