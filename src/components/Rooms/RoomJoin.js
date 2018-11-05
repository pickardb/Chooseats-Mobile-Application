import React, { Component } from 'react';
import { View, Text, ImageBackground } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from '../common';
import { Button } from 'react-native-elements';
import { Actions } from 'react-native-router-flux';
import { updateJoinRoomCode, joinRoom } from '../../actions/rooms';
import { TextField } from '../../utils/form_components';
import { Field } from 'redux-form';

const backgroundImage = require('./assets/Chooseats_Logo_Tall_Bottom.png');

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

class RoomJoin extends Component {
    componentWillUnmount() {
        Actions.refresh({ key: 'roomList' });
    }

    render() {
        const { error, handleSubmit, onSubmit } = this.props;
        return (
            <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>

            <View>
                <Card style={styles.textContainerStyle}>
                    <CardSection style={styles.cardSectionStyle}>
                        <Text style={styles.subtitleTextStyle}>
                            Enter the room code:
                        </Text>
                    </CardSection>
                    <CardSection style={styles.cardSectionStyle}>
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
                            backgroundColor: '#c67f00',
                            elevation: 5
                        }}
                        large title='Join Room'
                        onPress={handleSubmit(onSubmit)}
                    />

                </View>
            </ImageBackground>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        joinRoomCode: state.rooms.joinRoomCode,
    };
};

const mapDispatchToProps = (dispatch) => ({
    _joinRoom: (roomCode) => dispatch(joinRoom(roomCode)),
    _updateJoinRoomCode: (text) => dispatch(updateJoinRoomCode(text))
});

<<<<<<< HEAD
=======
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
    cardSectionStyle: {
        opacity: 0.8,
    },
};
>>>>>>> f0474a1f8478282e4b7fbfd72c46bc602357ab1a

export default connect(mapStatetoProps, mapDispatchToProps)(RoomJoin);
