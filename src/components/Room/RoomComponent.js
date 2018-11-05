import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { Card, Button } from 'react-native-elements';

import MessagesList from './Messages/MessagesList';
import MessagesFormContainer from './Messages/MessagesFormContainer';
import AddRestuarantButton from '../Restaurants/AddRestaurantButton';

const styles = {
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start'
    },
};

export default class RoomContainer extends React.Component {
    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                console.log(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

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
                <ScrollView ref="messagesView">
                    {!messages.isLoading &&
                        <MessagesList messages={messages} />
                    }
                </ScrollView>
                <MessagesFormContainer roomId={room.id} />
            </View>
        );
    }

}

