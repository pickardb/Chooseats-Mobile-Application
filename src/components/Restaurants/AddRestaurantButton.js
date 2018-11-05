import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ActionButton from 'react-native-action-button';

export default AddRestaurantButton = () => (
    <View style={{ flex: 1, backgroundColor: '#f3f3f3' }}>
        <ActionButton buttonColor="rgba(231,76,60,1)">
            <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
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