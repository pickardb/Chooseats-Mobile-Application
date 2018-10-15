import React from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card } from '../common';

const RoomListItem = ({ roomName }) => {
    return (
        <Card>
            <CardSection>
                <Text>
                    {roomName}
                </Text>
            </CardSection>
        </Card>
    );
};

export default RoomListItem;