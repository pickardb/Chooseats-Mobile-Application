import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Button, Input } from '../common';
import {Actions} from 'react-native-router-flux';
import {updateJoinRoomCode, joinRoom} from '../../actions/rooms';

class RoomJoin extends Component {
    componentWillUnmount(){
        Actions.refresh({key:'roomList' });
    }

    onButtonPress(){
        console.log(this.props.joinRoomCode);
      this.props._joinRoom(this.props.joinRoomCode);
    }
    render (){
        return(
            <View>
                <Card>
                    <CardSection>
                        <Text>Enter the room code: </Text>
                    </CardSection>
                    <CardSection>
                        <Input 
                            placeHolder="ABCDEF"
                            label="Room Code:"
                            value={this.props.joinRoomCode}
                            onChangeText={text=>this.props._updateJoinRoomCode(text)}
                        />
                        </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Join Room
                        </Button>
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const mapStatetoProps = state => {
    return {
        joinRoomCode: state.rooms.joinRoomCode,
    };
}

const mapDispatchToProps = dispatch => {
   return{
    _joinRoom: roomCode => dispatch(joinRoom(roomCode)),
    _updateJoinRoomCode: (text) => dispatch(updateJoinRoomCode(text))
}};

export default connect(mapStatetoProps,mapDispatchToProps)(RoomJoin);