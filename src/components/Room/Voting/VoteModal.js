import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from '../../common';
import VoteModalItem from './VoteModalItem';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { submitVote } from '../../../actions/voting';

const items = [
    {
        id: 1,
        itemName: "testItem1"
    },
    {
        id: 2,
        itemName: "testItem2"
    },
    {
        id: 3,
        itemName: "testItem3"
    }
];

class VoteModal extends Component {
    state = { showModal: true }

    renderItems(restaurants) {
        if (restaurants != null) {
            return restaurants.map((restaurant, index) => <VoteModalItem key={index} index={index} item={restaurant} />);
        }
    }

    onSubmitPress() {
        this.setState({ showModal: false });
        this.props.submitVote();
    }

    render() {
        return (
            <Modal
                animationType="slide"
                onRequestClose={() => { }}
                visible={this.state.showModal}
                transparent
                onRequestClose={() => { this.showModal(false); }}
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
                                {this.renderItems(this.props.restaurants)}
                                <Button
                                    large title='Submit Vote'
                                    onPress={this.onSubmitPress.bind(this)}
                                />
                            </ScrollView>
                        </CardSection>
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
        restaurants: state.voting.restaurants,
    };
};

export default connect(mapStatetoProps, { submitVote })(VoteModal);

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};

