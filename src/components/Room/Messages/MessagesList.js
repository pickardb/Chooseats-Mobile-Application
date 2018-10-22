import React from 'react';
import { Text, ScrollView } from 'react-native';

import MessageListItem from './MessageListItem';

export default MessageList = ({ messages: allMessages }) => {

    var messagesListJSX = allMessages.messages.map(message => {
        return (<MessageListItem key={message.id} message={message} />);
    })

    var localMessagesListJSX = allMessages.localMessages.map(message => {
        return (<MessageListItem key={message.id} message={message} />);
    })

    //messagesListJSX = messagesListJSX.reverse();
    return (
        <ScrollView>
            {messagesListJSX}
            {localMessagesListJSX}
        </ScrollView>);
}
