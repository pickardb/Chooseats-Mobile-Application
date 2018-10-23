import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from '../common';
import {Button} from 'react-native-elements';
import { createRoom, getRooms, updateNewRoomDesc, updateNewRoomName } from '../../actions/rooms';
import { Actions } from 'react-native-router-flux';
import RoomList from './RoomList';
import { TextField } from '../../utils/form_components';
import { Field } from 'redux-form';


class RoomCreate extends Component {
    onButtonPress() {
        this.props._createRoom(this.props.newRoomName, this.props.newRoomDesc);
    }

    componentDidMount() {
        console.log("New Room: " + this.props.newRoom);
    }

    componentWillUnmount() {
        Actions.refresh({ key: 'roomList' });
    }

    onNameChange(text) {
        this.props._updateNewRoomName(text)
    }

    onDescChange(text) {
        this.props._updateNewRoomDesc(text)
    }


    renderRoomCode() {
        if (this.props.newRoom) {
            return (
                <Card>
                <CardSection>
                    <Text style={styles.descriptTextStyle} >
                        Your Room Code:
                    </Text >
                    <Text style={styles.descriptTextStyle}>
                        {this.props.newRoom}
                    </Text>
                </CardSection>
                </Card>
            );
        }
        else {
            return (
                <Button
                    buttonStyle={{
                        marginVertical: 10,
                        backgroundColor: '#c67f00',
                        elevation: 5
                    }}
                    large title='Create a Room'
                    onPress={this.onButtonPress.bind(this)}
                />
            );
        }
    }

    render() {
        return (
            <View>
                
                    {this.renderRoomCode()}
                    <Card>
                    <CardSection>
                        <Input
                            label="Room Name"
                            placeholder="Name your room"
                            onChangeText={this.onNameChange.bind(this)}
                            value={this.newRoomName}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            label="Details"
                            placeholder="Room Details"
                            onChangeText={this.onDescChange.bind(this)}
                            value={this.newRoomDesc}
                        />
                    </CardSection>
                </Card>
            </View>
        );
    }
};

const styles = {
    descriptTextStyle: {
        textAlign: 'center',
        fontSize: 18,
        marginLeft: 10
    }
};

const mapStatetoProps = state => {
    return {
        newRoom: state.rooms.newRoom,
        newRoomName: state.rooms.newRoomName,
        newRoomDesc: state.rooms.newRoomDesc,
    };
};

const mapDispatchToProps = dispatch => ({
    _createRoom: (roomName, roomDesc) => dispatch(createRoom(roomName, roomDesc)),
    _getRooms: () => dispatch(getRooms),
    _updateNewRoomName: (text) => dispatch(updateNewRoomName(text)),
    _updateNewRoomDesc: (text) => dispatch(updateNewRoomDesc(text)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomCreate);