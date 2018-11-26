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

    componentWillMount(){
        console.log("Item Mounting");
    }
    createPickerItems() {
        var pickerArray = []
        console.log("this.props.max is: " + this.props.max)
        for(var i = 1; i<=this.props.max; i++){
            pickerArray.push(i.toString());
        }
        return pickerArray.map((value, index) => <Picker.Item key = {index} label={value} value={value}/>);
    }


    render() {
        return (
                <CardSection style={styles.containerStyle}>
                    <Picker
                        selectedValue={this.state.selectedDropDownValue}
                        onValueChange={(itemValue) => {
                            console.log("Index: " + this.props.index + " set to: " + itemValue);
                            this.setState({ selectedDropDownValue: itemValue});
                            this.props.rankedUpdate(this.props.index, parseInt(itemValue));
                        }}
                        style={{ flex: 1 }}
                    >
                        {this.createPickerItems()}
                    </Picker>
                    <Text style={styles.textStyle}>
                        {this.props.item.name}
                    </Text>
                </CardSection>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        choice: state.voting.choice,
    };
};

export default connect(mapStatetoProps, { chooseVote, rankedUpdate })(RankedVoteModalItem);

const styles = {
    containerStyle: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textStyle: {
        fontSize:20,
        color: "#000",
        flex: 3
    },
};