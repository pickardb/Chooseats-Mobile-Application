import React from 'react';
import { View, Text } from 'react-native';
import { ListItem } from 'react-native-elements';
import RestaurantViewModal from './RestaurantViewModal';

class RestaurantListItem extends React.Component {


    state = { showModal: false };

    onPress() {
        this.setState({ showModal: true });
    }
    render() {
        const { name, address, website } = this.props.restaurantInfo;
        const { restaurant } = this.props;
        return (
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
            </View>);
    }
};

export default RestaurantListItem;