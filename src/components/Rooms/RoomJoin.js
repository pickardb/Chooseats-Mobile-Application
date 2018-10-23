import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from '../common';
import {Button} from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { updateJoinRoomCode, joinRoom } from '../../actions/rooms';
import { TextField } from '../../utils/form_components';
import { Field } from 'redux-form';

class RoomJoin extends Component {
    componentWillUnmount() {
        Actions.refresh({ key: 'roomList' });
    }

    render() {
        const { error, handleSubmit, onSubmit } = this.props;
        return (
            <View>
                <Card>
                    <CardSection>
                        <Text style={styles.subtitleTextStyle}>
                            Enter the room code:
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Field
                            name="roomCode"
                            placeholder="ABC123"
                            label="Room Code:"
                            component={TextField}
                        />
                    </CardSection>
                    </Card>
                    <Button
                        buttonStyle={{
                            marginVertical: 10,
                            backgroundColor: '#9b6400',
                            elevation: 5
                        }}
                        large title='Join Room'
                        onPress={handleSubmit(onSubmit)}
                    />
                
            </View>
        );
    }
}

const mapStatetoProps = state => {
    return {
        joinRoomCode: state.rooms.joinRoomCode,
    };
}

const mapDispatchToProps = dispatch => ({
    _joinRoom: (roomCode) => dispatch(joinRoom(roomCode)),
    _updateJoinRoomCode: (text) => dispatch(updateJoinRoomCode(text))
});

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

export default connect(mapStatetoProps, mapDispatchToProps)(RoomJoin);
