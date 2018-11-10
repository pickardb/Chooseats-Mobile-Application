import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const RestaurantListItem = ({ restaurant, restaurantInfo }) => {
    const { name, address, website } = restaurantInfo;

    return (
        <ListItem
            key={restaurant.id}
            hideChevron={true}
            title={name}
            subtitle={address}
        />);
};

export default RestaurantListItem;