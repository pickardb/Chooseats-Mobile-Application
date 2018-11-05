import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const RestaurantListItem = ({ restaurant }) => {
    const { id, text, type, user } = restaurant;

    return (
        <ListItem
            key={id}
            hideChevron={true}
        />);
};

export default RestaurantListItem;