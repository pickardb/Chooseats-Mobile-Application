import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';

import { getRooms } from '../../actions/rooms';

class RoomLobbyContainer extends Component {
    componentDidMount() {
        const { _getRooms } = this.props;
        _getRooms();
    }

    render() {
        return (<View>
            <Text>
                You are viewing your lobby
            </Text>
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
