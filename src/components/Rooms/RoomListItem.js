import React from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card } from '../common';

const RoomListItem = ({ roomName }) => {
    return (
            <CardSection>
                <Text>
                    {roomName}
                </Text>
            </CardSection>
    );
};

export default RoomListItem;