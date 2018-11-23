import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

export default RoomListActionButton = ({ joinRoom, createRoom }) => (
    <View style={{ flex: 1 }}>
        <ActionButton buttonColor='#c67f00'>
            <ActionButton.Item buttonColor='#c67f00' title="Join Room" onPress={() => Actions.roomJoin()}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
            <ActionButton.Item buttonColor='#c67f00' title="Create a Room" onPress={() => Actions.roomCreate()}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
    </View >
)

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});