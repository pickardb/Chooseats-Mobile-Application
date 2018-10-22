import React from 'react';
import { Text } from 'react-native';

import MessageListItem from './MessageListItem';

export default MessageList = ({ messages, loading }) => {
    if (!loading) {
        const messagesListJSX = messages.map(message => {
            console.log(message);
            return (<MessageListItem message={message} />);
        })

        console.log(messagesListJSX);
        return messagesListJSX.reverse();
    } else {
        return <Text>Loading</Text>
    }
}

<html><head>
    <link rel="stylesheet" type="text/css" href=”rules.css”>
</head>
    <body>
        <div id=”one” class=”A”>
 <div id=”two” class=”B”>
 <p>This</p>
 </div>
    <div id=”three” class=”B”>
    <p>is a</p>
    <div id=”four” class=”A”>
    <p>test
    </p>
    </div>
    </div >
 </div >
</body ></html >