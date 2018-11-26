import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from '../../common';
import RankedVoteModalItem from './RankedVoteModalItem';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { submitRankedVote, setReduxArray, getRoomRestaurants, submitReadyService } from '../../../actions/voting';
import { red } from 'ansi-colors';


class RankedVoteModal extends Component {
    state = {
        showModal: true,
        error: ''
    }

    componentWillMount() {
        this.props._setReduxArray(this.props.restaurants.data.length);
        this.setState({ error: '' });
    }
    renderItems(restaurants, restaurant_info) {
        if (restaurants != null) {
            return restaurants.data.map((restaurant, index) =>
                <RankedVoteModalItem
                    key={index}
                    index={index}
                    item={restaurant_info[restaurant.google_places_id]}
                    restaurants={this.props.restaurants.data}
                    max={this.props.restaurants.data.length}
                />
            );
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("Ranked Modal receives new Props: ");
        console.log(newProps);

    }

    //Check to see that there is only one of each rank
    checkRanks(rankedChoices) {
        var total = 0;
        var check = 0;
        for (var i = 0; i < rankedChoices.length; i++) {
            total += parseInt(rankedChoices[i], 10);
            check += i + 1;
        }
        if (check == total) {
            return true;
        }
        else {
            console.log('Total is: ' + total + " and check is: " + check);
            this.setState({ error: "Please only select one of each rank" });
            return false;
        }
    }

    onSubmitPress() {
        if (this.checkRanks(this.props.rankedChoices)) {
            this.setState({ showModal: false });
            this.setState({ error: '' });
            this.props._submitRankedVote(this.props.rankedChoices, this.props.restaurants, this.props.currentRoom);
        }
    }

    renderError() {
        if (this.state.error) {
            return (

                <CardSection>
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
                    <Card>
                        <CardSection>
                            <Text style={styles.textStyle}>
                                Please Rank your Choices
                            </Text>
                        </CardSection>
                        <CardSection>
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

const mapStatetoProps = (state) => {
    return {
        voteSubmitted: state.voting.voteSubmitted,
        restaurantChosen: state.voting.choice,
        rankedChoices: state.voting.rankedChoices,
        restaurants: state.restaurants.restaurants,
        restaurant_info: state.restaurants.restaurant_info,
        votingState: state.voting.votingState,
    };
};

const mapDispatchToProps = (dispatch) => ({
    _submitRankedVote: (rankedChoices, restaurants, currentRoom) => dispatch(submitRankedVote(rankedChoices, restaurants, currentRoom)),
    _setReduxArray: (length) => dispatch(setReduxArray(length)),
    _submitReadyService: (room) => dispatch(submitReadyService(room)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RankedVoteModal);

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    },
    textStyle: {
        fontSize: 20,
        color: "#000",
        flex: 3
    },
    submitStyle: {
        backgroundColor: "#c67f00",
        marginBottom: 5,
        marginVertical: 10,
        elevation: 8,
    },
};

