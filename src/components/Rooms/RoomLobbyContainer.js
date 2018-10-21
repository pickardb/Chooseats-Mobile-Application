import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from '../common';
import { Actions } from 'react-native-router-flux';
import { getRooms } from '../../actions/rooms';

class RoomLobbyContainer extends Component {
    componentWillMount() {
        const { _getRooms } = this.props;
        _getRooms();
    }


    render() {
        return (<View>
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
        </View>)
    }
}

const mapStateToProps = state => ({
    rooms: state.rooms,
});

const mapDispatchToProps = dispatch => ({
    _getRooms: () => dispatch(getRooms),
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
    }
};
