import React from 'react';
import { View, Modal, Text, TouchableHighlight } from 'react-native';
import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux';

import RestaurantComponent from './RestaurantComponent';
import { getRoomRestaurants, addRestaurant } from '../../actions/restaurants';

class RestaurantContainer extends React.Component {

    openSearchModal = () => {

        RNGooglePlaces.openAutocompleteModal({
            type: 'establishment',
            country: 'CA',
            useOverlay: true
        })
            .then((place) => {
                this.props._addRestaurant(this.props.rooms.currentRoomId, place.placeID);
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    componentDidMount() {
        const { rooms, _getRestaurants } = this.props;
        _getRestaurants(rooms.currentRoomId);
    }

    render() {
        const { restaurants } = this.props
        const props = { restaurants };
        return (<RestaurantComponent {...props} openSearchModal={this.openSearchModal} />);
    }
};


const mapStateToProps = (state) => ({
    restaurants: state.restaurants,
    rooms: state.rooms,
});

const mapDispatchToProps = (dispatch) => ({
    _getRestaurants: (roomId) => dispatch(getRoomRestaurants(roomId)),
    _addRestaurant: (roomId, google_places_id) => dispatch(addRestaurant(roomId, google_places_id))
});

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);