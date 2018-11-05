import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';

const MessageListItem = ({ message }) => {
    const { id, text, type, user } = message;

    return (
        <ListItem
            key={id}
            title={user.email}
            subtitle={text}
            hideChevron={true}
        />);
};

export default MessageListItem;