import React, { Component } from 'react';
import { View, Text, ImageBackground, Picker } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from '../common';
import { Button } from 'react-native-elements';
import { 
    createRoom, 
    getRooms, 
    updateNewRoomDesc, 
    updateNewRoomName, 
    updateNewRoomMax, 
    updateNewRoomVote, 
} from '../../actions/rooms';
import { Actions } from 'react-native-router-flux';
import RoomList from './RoomList';
import { TextField } from '../../utils/form_components';
import { Field } from 'redux-form';

const backgroundImage = require('./assets/Chooseats_Logo_Tall_Bottom.png');

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
        this.props._updateNewRoomName(text);
    }

    onDescChange(text) {
        this.props._updateNewRoomDesc(text);
    }

    onMaxChange(value) {
        this.props._updateNewRoomMax(value);
    }

    onVoteChange(value){
        this.props._updateNewRoomVote(value);
    }


    renderRoomCode() {
        if (this.props.newRoom) {
            return (
                <Card style={styles.textContainerStyle}>
                <CardSection style={styles.cardSectionStyle}>
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
            <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>

                <View>

                    {this.renderRoomCode()}
                    <Card style={styles.textContainerStyle}>
                    <CardSection style={styles.cardSectionStyle}>
                        <Input
                            label="Room Name"
                            placeholder="Name your room"
                            onChangeText={this.onNameChange.bind(this)}
                            value={this.newRoomName}
                        />
                    </CardSection>
                    <CardSection style={styles.cardSectionStyle}>
                        <Input
                            label="Details"
                            placeholder="Room Details"
                            onChangeText={this.onDescChange.bind(this)}
                            value={this.newRoomDesc}
                        />
                    </CardSection>
                    <CardSection style={styles.pickerSectionStyle}>
                        <Text>Max # of people</Text>
                        <Picker
                            selectedValue = {this.props.newRoomMax}
                            onValueChange={this.onMaxChange.bind(this)}
                        >
                            <Picker.Item label="1" value="1"/>
                            <Picker.Item label="2" value="2"/>
                            <Picker.Item label="3" value="3"/>
                            <Picker.Item label="4" value="4"/>
                            <Picker.Item label="5" value="5"/>
                            <Picker.Item label="6" value="6"/>
                            <Picker.Item label="7" value="7"/>
                            <Picker.Item label="8" value="8"/>
                        </Picker>
                    </CardSection>
                    <CardSection style={styles.pickerSectionStyle}>
                        <Text>Voting Style</Text>
                        <Picker
                            selectedValue = {this.props.newRoomVote}
                            onValueChange={this.onVoteChange.bind(this)}
                        >
                            <Picker.Item label="Single Vote" value="vote"/>
                            <Picker.Item label="Random" value="random"/>
                            <Picker.Item label="Ranked" value="rank"/>
                            <Picker.Item label="Swipe" value="tinder"/>
                        </Picker>
                    </CardSection>
                </Card>
            </View>
            </ImageBackground>
        );
    }
};

const styles = {
    descriptTextStyle: {
        textAlign: 'center',
        fontSize: 18,
        marginLeft: 10
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        paddingBottom: 25,
    },
    textContainerStyle: {
        flexDirection: 'column',
        borderRadius: 5,
        opacity: 0.8
    },
    cardSectionStyle: {
        opacity: 0.8,
    },
    pickerSectionStyle: {
        opacity: 0.8,
        flexDirection: 'column'
    }
};

const mapStatetoProps = (state) => {
    return {
        newRoom: state.rooms.newRoom,
        newRoomName: state.rooms.newRoomName,
        newRoomDesc: state.rooms.newRoomDesc,
        newRoomMax: state.rooms.newRoomMax,
        newRoomVote: state.rooms.newRoomVote,
    };
};

const mapDispatchToProps = (dispatch) => ({
    _createRoom: (roomName, roomDesc) => dispatch(createRoom(roomName, roomDesc)),
    _getRooms: () => dispatch(getRooms),
    _updateNewRoomName: (text) => dispatch(updateNewRoomName(text)),
    _updateNewRoomDesc: (text) => dispatch(updateNewRoomDesc(text)),
    _updateNewRoomMax: (text) => dispatch(updateNewRoomMax(text)),
    _updateNewRoomVote: (text) => dispatch(updateNewRoomVote(text)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RoomCreate);
