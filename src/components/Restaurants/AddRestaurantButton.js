import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ActionButton from 'react-native-action-button';

export default AddRestaurantButton = ({ onClick }) => (
    <ActionButton buttonColor='#c67f00'>
        <ActionButton.Item buttonColor='#c67f00' title="Add Restaurant" onPress={onClick}>
            <Icon name="restaurant" style={styles.actionButtonIcon} />
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