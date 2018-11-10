import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { Button } from 'react-native-elements';
import { Card, CardSection } from '../../common';
import RankedVoteModalItem from './RankedVoteModalItem';
import { connect } from 'react-redux';
import { ScrollView } from 'react-native';
import { submitVote, setReduxArray } from '../../../actions/voting';

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
    {
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
    },
];

class RankedVoteModal extends Component {
    state = { showModal: true }

    componentWillMount(){
        this.props.setReduxArray(items.length);
    }
    renderItems(items) {
        if (items != null) {
            return items.map((item) => <RankedVoteModalItem  key={item.id} item={item} max={items.length} />);
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
                                {this.renderItems(items)}
                                <Button
                                    large title='Submit Vote'
                                    onPress={this.onSubmitPress.bind(this)}
                                    buttonStyle = {{
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
    };
};

export default connect(mapStatetoProps, { submitVote, setReduxArray })(RankedVoteModal);

const styles = {
    modalStyle: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
    }
};

