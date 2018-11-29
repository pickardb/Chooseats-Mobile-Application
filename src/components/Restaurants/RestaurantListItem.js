import React from 'react';
import { View, Text } from 'react-native';
import { Card, Rating } from 'react-native-elements';
import RestaurantViewModal from './RestaurantViewModal';

class RestaurantListItem extends React.Component {


    state = { showModal: false };

    onPress() {
        this.setState({ showModal: true });
    }
    render() {
        const { name, address, rating, additionalInfo } = this.props.restaurantInfo;
        const { restaurant } = this.props;
        const photoId = additionalInfo ? additionalInfo.photos[0].photo_reference : null;
        return (
            <Card
                title={name}
                image={{
                    uri: 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDPby2X44nOJt8mF3VAriIIwHETjtIIwKM&maxheight=500&photoreference='
                        + photoId
                }}>
                <Rating
                    imageSize={20}
                    readonly
                    startingValue={rating}
                />
                <Text h3 style={{ marginBottom: 10 }}>
                    {address}
                </Text>
            </Card>
        );
        /*return (
            <View>
                <ListItem
                    key={restaurant.id}
                    hideChevron={true}
                    title={name}
                    subtitle={address}
                    onPress={this.onPress.bind(this)}
                >
                </ListItem>
                {this.state.showModal && <RestaurantViewModal googlePlacesId={restaurant.google_places_id} onRequestClose={() => this.setState({ showModal: false })} />}
            </View>);*/
    }
};

export default RestaurantListItem;