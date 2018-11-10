import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

export default AddRestaurantButton = ({ onClick }) => (
    <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <ActionButton buttonColor='#c67f00'>
            <ActionButton.Item buttonColor='#c67f00' title="Add Restaurant" onPress={onClick}>
                <Icon name="md-create" style={styles.actionButtonIcon} />
            </ActionButton.Item>
        </ActionButton>
    </View>
)

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
    },
});