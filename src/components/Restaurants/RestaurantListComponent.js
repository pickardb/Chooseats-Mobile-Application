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

    /*var restaurantsListJSX = restaurants.map((restaurant) => {
        return {};//(<RestaurantListItem key={restaurant.id} restaurant={restaurant} />);
          {restaurantsListJSX}
    });*/

    return (
        <List containerStyle={styles.container}>
            <ListItem
                title='Limited supply! Its like digital gold!'
            />
            <ListItem
                title='Limited supply! Its like digital gold!'
            />
            <ListItem
                title='Limited supply! Its like digital gold!'
            />
        </List>);
};
export default RestaurantListComponent;