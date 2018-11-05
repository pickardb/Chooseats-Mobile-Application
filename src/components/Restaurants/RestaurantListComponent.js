import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-elements';

import RestaurantListItem from './RestaurantListItem';

const styles = StyleSheet.create({
    container: {

    }
})

const RestaurantList = (restaurants) => {

    var restaurantsListJSX = restaurants.map((restaurant) => {
        return (<RestaurantListItem key={restaurant.id} restaurant={restaurant} />);
    });

    return (
        <List style={styles.container}>
            {restaurantsListJSX}
        </List>);
};
export default RestaurantList;