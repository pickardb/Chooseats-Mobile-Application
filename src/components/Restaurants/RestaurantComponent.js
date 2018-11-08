import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddRestaurantButton from './AddRestaurantButton';
import RestaurantListComponent from './RestaurantListComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const RestaurantComponent = ({ openSearchModal }) => {

    return (
        <View style={styles.container}>
            <RestaurantListComponent restaurants={{ rest1: {} }} />
            <AddRestaurantButton onClick={openSearchModal} />
        </View>);
};

export default RestaurantComponent;