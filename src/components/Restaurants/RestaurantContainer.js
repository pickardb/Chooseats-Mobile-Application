import React from 'react';
import { View, Modal } from 'react-native'; 

import RNGooglePlaces from 'react-native-google-places';
import { connect } from 'react-redux';
import RestaurantComponent from './RestaurantComponent';

class RestaurantContainer extends React.Component {

    openSearchModal() {
        RNGooglePlaces.openAutocompleteModal()
            .then((place) => {
                console.log(place);
                // place represents user's selection from the
                // suggestions and it is a simplified Google Place object.
            })
            .catch(error => console.log(error.message));  // error is a Javascript Error object
    }

    componentDidMount(){
        const {roomId} = this.props;
        _getRetaurants();
    }

    render() {  
        return( 
        <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

            <RestaurantComponent openSearchModal={this.openSearchModal} />
        </View>   );
    }
};


const mapStateToProps = (state) => ({
    restaurants: state.restaurants
});

const mapDispatchToProps = (dispatch) => ({
    _getRestaurants: ( roomId ) => getRoomRestaurants(roomId)
});


export default connect(mapStateToProps, mapDispatchToProps)(RestaurantContainer);