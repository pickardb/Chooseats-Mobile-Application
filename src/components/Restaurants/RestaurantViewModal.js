import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Card, Rating, Button } from 'react-native-elements';
//import { Card, CardSection } from '../../common';
import { connect } from 'react-redux';

class RestaurantViewModal extends Component {
    state = {
        showModal: true,
        error: ''
    }

    render() {
        const { restaurant_info, googlePlacesId } = this.props;

        return (
            <Modal
                animationType="slide"
                onRequestClose={() => { }}
                visible={this.state.showModal}
                transparent
                onRequestClose={this.props.onRequestClose}
            >
                {restaurant_info[googlePlacesId] && restaurant_info[googlePlacesId].additionalInfo &&
                    <View style={styles.modalStyle}>
                        <Card
                            image={{
                                uri: 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDPby2X44nOJt8mF3VAriIIwHETjtIIwKM&maxheight=500&photoreference='
                                    + restaurant_info[googlePlacesId].additionalInfo.photos[0].photo_reference
                            }}
                        >
                            <Text >
                                {restaurant_info[googlePlacesId].name}
                            </Text>
                            <Text>
                                {restaurant_info[googlePlacesId].address}
                            </Text>
                            <Rating
                                imageSize={20}
                                readonly
                                startingValue={restaurant_info[googlePlacesId].rating}
                            />
                            <Button
                                backgroundColor='#ffb839'
                                buttonStyle={{ borderRadius: 0, marginTop: 10, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                                title="Close"
                                onPress={this.props.onRequestClose}
                            />
                        </Card>
                    </View>}
            </Modal>
        );
    }
};

const mapStatetoProps = (state) => ({
    restaurant_info: state.restaurants.restaurant_info
});

const mapDispatchToProps = (dispatch) => ({
    _getRestaurantInfomation: id => dispatch(getRestaurantInformation(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(RestaurantViewModal);

const styles = {
    modalStyle: {
        padding: '10px',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};

