import React, { Component } from 'react';
import { Text, View } from 'react-native';
import Modal from 'react-native-modal';
import { Card, Rating, Button } from 'react-native-elements';
//import { Card, CardSection } from '../../common';
import { connect } from 'react-redux';
import { getRestaurantInformation, getAdditionalRestaurantInformation } from '../../../actions/restaurants';
import {Actions} from 'react-native-router-flux';
import RoomContainer from '../RoomContainer';

class SelectedRestaurantModal extends Component {
    state = {
        showModal: false,
        error: ''
    }

    componentWillMount(){
        this.setState({ showModal: false });

    }
    componentDidMount() {
        this.props._getRestaurantInfomation(this.props.googlePlacesId);
        this.props._getAdditionalRestaurantInformation(this.props.googlePlacesId);
        setTimeout(()=>{
            this.setState({ showModal: true });
            console.log("Setting state to true");
        }, 1000);
    }

    render() {
        const { restaurant_info, googlePlacesId } = this.props;

        return (
            <Modal
                isVisible={this.state.showModal}
                onBackButtonPress={() => { this.setState({ showModal: false }) }}
                hideModalContentWhileAnimating={true}
            >
              {restaurant_info[googlePlacesId] && restaurant_info[googlePlacesId].additionalInfo &&
                    <View style={styles.modalStyle}>
                        <Card
                            image={{
                                uri: 'https://maps.googleapis.com/maps/api/place/photo?key=AIzaSyDPby2X44nOJt8mF3VAriIIwHETjtIIwKM&maxheight=500&photoreference='
                                    + restaurant_info[googlePlacesId].additionalInfo.photos[0].photo_reference
                            }}
                            title='Your group has chosen a restaurant!'
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
                                title="Let's Go!"
                                onPress={() => this.setState({ showModal: false }) }
                            />
                        </Card>
                    </View>}
                    {!(restaurant_info[googlePlacesId] && restaurant_info[googlePlacesId].additionalInfo )&&
                        <View>
                            <Card>
                                <Text>
                                    No info
                                </Text>
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
    _getRestaurantInfomation: id => dispatch(getRestaurantInformation(id)),
    _getAdditionalRestaurantInformation: id => dispatch(getAdditionalRestaurantInformation(id))
});

export default connect(mapStatetoProps, mapDispatchToProps)(SelectedRestaurantModal);

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};

