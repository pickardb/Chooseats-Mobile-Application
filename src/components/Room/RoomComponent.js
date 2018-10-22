import React from 'react';
import { View, Text } from 'react-native';
import { Card, CardSection } from '../common';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';

export default RoomComponent = ({ messages, room }) => {
    const { roomCode, name, id } = room;

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
                        This Room's name is: {name}
                    </Text>
                </CardSection>
                <CardSection>
                    <Text>
                        This Room's id is: {id}
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

