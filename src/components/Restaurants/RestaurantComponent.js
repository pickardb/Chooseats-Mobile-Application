import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddRestaurantButton from './AddRestaurantButton';
import RestaurantListComponent from './RestaurantListComponent';

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

const RestaurantComponent = ({ openSearchModal, restaurants }) => {

    return (
        <View style={styles.container}>
            {!restaurants.isLoading && <RestaurantListComponent restaurants={restaurants} />}
            <AddRestaurantButton onClick={openSearchModal} />
        </View>);
};

export default RestaurantComponent;