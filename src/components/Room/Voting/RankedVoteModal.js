import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from '../../common';
import RankedVoteModalItem from './RankedVoteModalItem';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { submitRankedVote, setReduxArray, getRoomRestaurants } from '../../../actions/voting';
import { red } from 'ansi-colors';


class RankedVoteModal extends Component {
    state = {
        showModal: true,
        error: ''
    }

    componentWillMount() {
        this.props._setReduxArray(Object.keys(this.props.restaurant_info).length);
        this.setState({ error: '' });
    }
    renderItems(restaurant_info) {
        if (Object.keys(restaurant_info).length > 0) {
            return Object.keys(restaurant_info).map((restaurantKey, index) => <RankedVoteModalItem key={index} index={index} item={this.props.restaurant_info[restaurantKey]} max={Object.keys(restaurant_info).length} />);
        }
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
            this.props._submitRankedVote();
        }
    }

    renderError() {
        if (this.state.error) {
            return (

                <CardSection>
                    <Text
                        style={{
                            color:"#F11",
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
                            <Text>
                                Please Select an Item
                        </Text>
                        </CardSection>
                        <CardSection>
                            <ScrollView >
                                {this.renderItems(this.props.restaurant_info)}
                                <Button
                                    large title='Submit Vote'
                                    onPress={this.onSubmitPress.bind(this)}
                                    buttonStyle={{
                                        marginVertical: 10,
                                        elevation: 8
                                    }}
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
        restaurants: state.voting.restaurants,
        restaurant_info: state.voting.restaurant_info,
    };
};

const mapDispatchToProps = (dispatch) => ({
    _submitRankedVote: () => dispatch(submitRankedVote),
    _setReduxArray: (length) => dispatch(setReduxArray(length)),
});

export default connect(mapStatetoProps, mapDispatchToProps)(RankedVoteModal);

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};

