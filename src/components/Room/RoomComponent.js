import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Card } from 'react-native-elements';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';
import VoteModal from './Voting/VoteModal';
import RankedVoteModal from './Voting/RankedVoteModal';

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
};

export default class RoomContainer extends React.Component {

    componentDidMount() {
        this.refs.messagesView.scrollToEnd({ animated: false });
    }

    render() {
        const { messages, room } = this.props;

        return (
            <View style={styles.container}>

                <Card title={room.roomDesc} >
                    <Text h3>This rooms code is {room.roomCode}</Text>
                </Card>
                <ScrollView ref="messagesView"

                >
                    {!messages.isLoading &&
                        <MessagesList messages={messages} />
                    }
                </ScrollView>

                <MessagesFormContainer roomId={room.id} />
                <RankedVoteModal />
            </View>
        );
    }

}

