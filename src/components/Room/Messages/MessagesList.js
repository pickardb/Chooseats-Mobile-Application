import React from 'react';
import { Text, ScrollView } from 'react-native';
import { List } from 'react-native-elements';

import MessageListItem from './MessageListItem';

const MessageList = ({ messages: allMessages }) => {

    var messagesListJSX = allMessages.messages.map((message) => {
        return (<MessageListItem key={message.id} message={message} />);
    });

    var localMessagesListJSX = allMessages.localMessages.map((message) => {
        return (<MessageListItem key={message.id} message={message} />);
    });

    //messagesListJSX = messagesListJSX.reverse();
    return (
        <List>
            {messagesListJSX}
            {localMessagesListJSX}
        </List>);
};
//            </List>{localMessagesListJSX}
export default MessageList;