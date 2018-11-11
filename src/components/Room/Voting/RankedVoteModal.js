import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from '../../common';
import RankedVoteModalItem from './RankedVoteModalItem';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { submitRankedVote, setReduxArray } from '../../../actions/voting';

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
    },
    /*{
        id: 4,
        itemName: "testItem4"
    },
    {
        id: 5,
        itemName: "testItem4"
    },
    {
        id: 6,
        itemName: "testItem4"
    },
    {
        id: 7,
        itemName: "testItem4"
    },
    {
        id: 8,
        itemName: "testItem4"
    },*/
];

class RankedVoteModal extends Component {
    state = {
        showModal: true,
        error: null
    }

    componentWillMount() {
        this.props.setReduxArray(items.length);
    }
    renderItems(items) {
        if (items != null) {
            return items.map((item) => <RankedVoteModalItem key={item.id} item={item} max={items.length} />);
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
            console.log('Total is: '+total+ " and check is: " + check);
            this.setState({ error: "Please only select one of each rank" });
            return false;
        }
    }

    onSubmitPress() {
        if (this.checkRanks(this.props.rankedChoices)) {
            this.setState({ showModal: false });
            this.props.submitRankedVote();
        }
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
                                {this.renderItems(items)}
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
    };
};

export default connect(mapStatetoProps, { submitRankedVote, setReduxArray })(RankedVoteModal);

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};

