import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddRestaurantButton from './AddRestaurantButton';
import RestaurantListComponent from './RestaurantListComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const RestaurantComponent = () => {
    return(
    <View style={styles.container}>
        <RestaurantListComponent restaurants={{}}/>
        <AddRestaurantButton />
    </View>);
};

export default RestaurantComponent;