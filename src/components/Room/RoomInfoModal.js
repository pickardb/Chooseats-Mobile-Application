import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Card, Rating, Button } from 'react-native-elements';
//import { Card, CardSection } from '../../common';
import { connect } from 'react-redux';

export default class RoomInfoModal extends Component {
    state = {
        showModal: true,
        error: ''
    }

    render() {
        const { room } = this.props;

        return (
            <Modal
                animationType="slide"
                onRequestClose={() => { }}
                visible={this.state.showModal}
                transparent
                onRequestClose={this.props.onRequestClose}
            >  
                    <View style={styles.modalStyle}>
                        <Card>
                            <Text >
                                {room.roomName}
                            </Text>
                            <Text>
                                {room.roomDesc}
                            </Text>
                            <Text>
                                {'Room Code: ' + room.roomCode}
                            </Text>
                            <Text>
                                {'Room Size: ' + room.roomMax}
                            </Text>
                            <Text>
                                {'Room Type: ' + room.roomType}
                            </Text>
                            
                            <Button
                                backgroundColor='#ffb839'
                                buttonStyle={{ borderRadius: 0, marginTop: 10, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title="Close"
                                onPress={this.props.onRequestClose}
                            />
                        </Card>
                    </View>
            </Modal>
        );
    }
};

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};

