import React from 'react';
import { StyleSheet } from 'react-native';
import { List } from 'react-native-elements';

import MessageListItem from './MessageListItem';

const styles = StyleSheet.create({
    container: {
        marginTop: 0
    }
})

const MessageList = ({ messages: allMessages }) => {

    var messagesListJSX = allMessages.messages.map((message) => {
        return (<MessageListItem key={message.id} message={message} />);
    });

    var localMessagesListJSX = allMessages.localMessages.map((message) => {
        return (<MessageListItem key={message.id} message={message} />);
    });

    //messagesListJSX = messagesListJSX.reverse();
    return (
        <List containerStyle={styles.container}>
            {messagesListJSX}
            {localMessagesListJSX}
        </List>);
};
export default MessageList;