import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { Button, Card, CardSection } from '../common';
import { Actions } from 'react-native-router-flux';
import { getRooms } from '../../actions/rooms';

class RoomLobbyContainer extends Component {
    componentDidMount() {
        const { _getRooms } = this.props;
        _getRooms();
    }

    render() {
        return (<View>
            <CardSection>
                <Text>
                    You are viewing your lobby
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
