import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import ActionButton from 'react-native-action-button';
import { Actions } from 'react-native-router-flux';

export default RoomListActionButton = ({ joinRoom, createRoom }) => (
    <ActionButton buttonColor='#388E3C'>
        <ActionButton.Item buttonColor='#388E3C' title="Join Room" onPress={() => Actions.roomJoin()}>
            <Icon name="users" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item buttonColor='#388E3C' title="Create a Room" onPress={() => Actions.roomCreate()}>
            <Icon name="user-plus" style={styles.actionButtonIcon} />
        </ActionButton.Item>
    </ActionButton>
)

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});