import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from '../common';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';

export default RoomComponent = ({ messages, room }) => {
    const { roomCode, roomName, roomDesc } = room;

    return (
        <View>
            <Card>
                <CardSection>
                    <Text>
                        This Room's code is: {roomCode}
                    </Text>

                </CardSection>
                <CardSection>
                    <Text>
                        This Room's name is: {roomName}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text>
                        {roomDesc}
                    </Text>

                </CardSection>
            </Card>
            <Card>
                <CardSection>
                    {!messages.isLoading &&
                        <MessagesList messages={messages} />
                    }
                </CardSection>
            </Card>
            <MessagesFormContainer roomId={room.id} />
        </View>
    );
}

