import React from 'react';
import { StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';

import RestaurantListItem from './RestaurantListItem';

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    }
})

const RestaurantListComponent = ({ restaurants }) => {

    var restaurantsListJSX = restaurants.restaurants.data.map((restaurant) => {
        return (<RestaurantListItem key={restaurant.id} restaurant={restaurant} restaurantInfo={restaurants.restaurant_info[restaurant.google_places_id]} />);
    });


    return (
        <List containerStyle={styles.container}>
            {!restaurants.isLoading && restaurantsListJSX}
        </List>);
};
export default RestaurantListComponent;