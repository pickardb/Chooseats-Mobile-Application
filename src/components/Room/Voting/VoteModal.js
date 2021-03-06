import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from '../../common';
import VoteModalItem from './VoteModalItem';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { submitVote, submitReadyService } from '../../../actions/voting';
import { getRooms } from '../../../actions/rooms';
import { Actions } from 'react-native-router-flux';
class VoteModal extends Component {
    state = {
        showModal: true,
        error: ''
    }

    renderItems(restaurants, restaurant_info) {
        if (restaurants != null) {
            console.log(restaurants);
            return restaurants.data.map((restaurant, index) =>
                <VoteModalItem
                    key={index}
                    index={index}
                    item={restaurant_info[restaurant.google_places_id]}
                    restaurants={this.props.restaurants.data}
                />
            );
        }
    }

    onSubmitPress() {
        if (this.props.chosen!='') {
            this.setState({ showModal: false });
            this.setState({ error: '' });
            this.props._submitVote(this.props.chosen, this.props.currentRoom);
            this.props._submitReadyService(this.props.currentRoom);
            this.props._getRooms();

        }
        else {
            this.setState({ error: 'Please select a Restaurant' });
        }
    }

    /*componentWillReceiveProps(nextProps){
        console.log("Vote Modal receives new Props: ");
        console.log(nextProps);

    }*/

    renderError() {
        if (this.state.error) {
            return (

                <CardSection style={styles.cardStyle}>
                    <Text
                        style={{
                            color: "#F11",
                            fontSize: 18,
                        }}
                    >
                        {this.state.error}
                    </Text>
                </CardSection>
            );
        }
    }

    render() {
        return (
            <Modal
                animationType="slide"
                onRequestClose={() => { }}
                visible={this.state.showModal}
                transparent
                onRequestClose={() => { this.setState({ showModal: false }) }}
            >
                <View style={styles.modalStyle}>
                    <Card style={styles.cardStyle}>
                        <CardSection style={styles.cardStyle}>
                            <Text style={styles.textStyle}>
                                Please Select an Item
                        </Text>
                        </CardSection>
                        <CardSection style={styles.cardStyle}>
                            <ScrollView >
                                {this.renderItems(this.props.restaurants, this.props.restaurant_info)}
                                <Button
                                    large title='Submit Vote'
                                    onPress={this.onSubmitPress.bind(this)}
                                    buttonStyle={styles.submitStyle}
                                />
                            </ScrollView>
                        </CardSection>
                        {this.renderError()}
                    </Card>
                </View>
            </Modal>
        );
    }
};

const mapDispatchtoProps = (dispatch) => ({
    _submitVote: (choice, room) => dispatch(submitVote(choice, room)),
    _getRooms: () => dispatch(getRooms),
    _submitReadyService: (room) => dispatch(submitReadyService(room)),
});

const mapStatetoProps = (state) => {
    return {
        voteSubmitted: state.voting.voteSubmitted,
        restaurantChosen: state.voting.choice,
        restaurants: state.restaurants.restaurants,
        restaurant_info: state.restaurants.restaurant_info,
        chosen: state.voting.choice,
        votingState: state.voting.votingState,
    };
};

export default connect(mapStatetoProps, mapDispatchtoProps)(VoteModal);

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    cardStyle: {
        borderRadius: 4,
    },
    textStyle: {
        fontSize: 21,
        color: "#000",
        flex: 1,
        flexDirection: "row",
    },
    submitStyle: {
        backgroundColor: "#c67f00",
        marginBottom: 5,
    },
};

