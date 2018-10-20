import React from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card } from '../common';

const RoomListItem = ({ roomName, id }) => {
    return (
            <CardSection>
                <Text>
                    {roomName}
                </Text>
                <Text>
                    {id}
                </Text>
            </CardSection>
    );
};

export default RoomListItem;