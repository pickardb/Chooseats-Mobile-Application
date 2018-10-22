import React from 'react';
import { View, Text } from 'react-native';
import { CardSection, Card } from '../common';

export default MessageListItem = (message) => {
    const { text, type, user } = message;
    return (
        <View>
            <Text>
                {text}
            </Text>
        </View>);
};