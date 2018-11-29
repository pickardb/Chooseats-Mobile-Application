import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection, Card } from '../common';
import { Actions } from 'react-native-router-flux';
import { black } from 'ansi-colors';

class RoomListItem extends Component {

    onRowPress() {
        const { index, room, room: { roomCode, roomName }, setCurrentRoomHandler } = this.props;
        setCurrentRoomHandler();
        Actions.roomContainer({ room, title: roomName, index: index });
    }

    renderLogo() {
        if (this.props.room.roomState == "voting") {
            return (
                <Text style={Styles.logoStlye}>
                    V
                </Text>
            );
        }
        else if (this.props.room.roomState == "done") {
            return (
                <Text style={Styles.logoStlye}>
                    F
                </Text>
            );
        }
    }

    render() {
        const { room: { roomName, roomCode } } = this.props;
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection style={Styles.itemStyle}>
                        <View style={Styles.containerStyle}>
                            <Text style={Styles.titleStyle}>
                                {roomName}
                            </Text>
                            <Text style={Styles.idStyle}>
                                {roomCode}
                            </Text>
                        </View>
                        {this.renderLogo()}
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default RoomListItem;

const Styles = {
    titleStyle: {
        fontSize: 24,
        color: 'black',
        flex: 1
    },
    idStyle: {
        fontSize: 18,
        color: 'black'
    },
    itemStyle: {
        flex: 1,
        flexDirection: 'row',
        opacity: 0.8,
    },
    containerStyle: {
        flex: 9,
        flexDirection: 'column',
    },
    logoStlye: {
        flex: 1,
        fontSize: 32,
        color: '#000',
    },
};
