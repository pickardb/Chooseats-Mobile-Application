import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, TouchableWithoutFeedback, Picker } from 'react-native';
import { connect } from 'react-redux';
import { chooseVote, rankedUpdate } from '../../../actions/voting';
import { Actions } from 'react-native-router-flux';
import { Card, CardSection } from '../../common';

class RankedVoteModalItem extends Component {
    state = {
        style: styles.buttonStyle,
        selectedDropDownValue: "1"
    };

    createPickerItems() {
        var pickerArray = []
        for(var i = 1; i<=this.props.max; i++){
            pickerArray.push(i.toString());
        }
        return pickerArray.map((value, index) => <Picker.Item key = {index} label={value} value={value}/>);
    }


    render() {
        return (
                <CardSection style={{ flexDirection: 'row' }}>
                    <Picker
                        selectedValue={this.state.selectedDropDownValue}
                        onValueChange={(itemValue) => {
                            console.log("Index: " + this.props.index + " set to: " + itemValue);
                            this.setState({ selectedDropDownValue: itemValue});
                            this.props.rankedUpdate(this.props.index, itemValue);
                        }}
                        style={{ flex: 1 }}
                    >
                        {this.createPickerItems()}
                    </Picker>
                    <Text style={{ flex: 3 }}>
                        {this.props.item.google_places_id}
                    </Text>
                </CardSection>
        );
    }
}

const mapStatetoProps = (state) => {
    console.log("state.choice is " + state.voting.choice);
    return {
        choice: state.voting.choice,
    };
};

export default connect(mapStatetoProps, { chooseVote, rankedUpdate })(RankedVoteModalItem);

const styles = {
    buttonStyle: {
        marginVertical: 5,
        backgroundColor: '#00f',
        borderColor: '#000',
    },
    chosenButtonStyle: {
        marginVertical: 5,
        backgroundColor: '#f00',
        borderColor: '#fff',
    }
};