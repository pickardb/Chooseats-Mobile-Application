import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddRestaurantButton from './AddRestaurantButton';
import RestaurantListComponent from './RestaurantListComponent';

const styles = StyleSheet.create({
    container: {
    }
});

const RestaurantComponent = ({ openSearchModal, restaurants }) => {

    return (<RestaurantListComponent openSearchModal={openSearchModal} restaurants={restaurants} />);
};

export default RestaurantComponent;