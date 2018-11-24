import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import AddRestaurantButton from './AddRestaurantButton';
import RestaurantListItem from './RestaurantListItem';

const styles = StyleSheet.create({
    container: {
        margin: 0,
        backgroundColor: '#D3D3D3',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    }
})

const RestaurantListComponent = ({ restaurants, openSearchModal }) => {

    var restaurantsListJSX = restaurants.restaurants.data.map((restaurant) => {
        return (<RestaurantListItem key={restaurant.id} restaurant={restaurant} restaurantInfo={restaurants.restaurant_info[restaurant.google_places_id]} />);
    });

    return (
        <View style={styles.container}>
            <ScrollView>
                {!restaurants.isLoading && restaurantsListJSX}
            </ScrollView>

            <AddRestaurantButton onClick={openSearchModal} />


        </View>
    );
};
export default RestaurantListComponent;