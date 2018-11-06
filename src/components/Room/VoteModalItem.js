import React, { Component } from 'react';
import { Button } from 'react-native-elements';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux';
import {chooseVote} from '../../actions/voting';
import { Actions } from 'react-native-router-flux';

class VoteModalItem extends Component {
    state={
        style: styles.buttonStyle
    };
    
    onPress(){
        this.props.chooseVote(this.props.item);
    }

    componentWillReceiveProps(newProps){
        console.log("Component Received Props");
        this.chooseButtonStyle(newProps);
    }
    
    chooseButtonStyle(newProps){
        console.log("chooseButtonStyle: " + newProps.choice);
        if(newProps.choice==this.props.item.itemName){
            this.setState({style:styles.chosenButtonStyle});
        }
        else{
            this.setState({style:styles.buttonStyle});
        }
    }
    
    render() {
        return (
            <Button 
            onPress={this.onPress.bind(this)} 
            buttonStyle={this.state.style}
            large title =  {this.props.item.itemName}
            />
        );
    }
}

const mapStatetoProps = (state) => {
    console.log("state.choice is " + state.voting.choice);
    return {
        choice: state.voting.choice,
    };
};

export default connect(mapStatetoProps, {chooseVote})(VoteModalItem);

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