import React, { Component } from 'react';
import { Button } from '../common';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import {connect} from 'react-redux';
import {chooseVote} from '../../actions/voting';

class VoteModalItem extends Component {
    onPress(){
        this.props.chooseVote(this.props.item.id);
    }
    
    render() {
        return (
            <Button onPress={this.onPress.bind(this)} style={styles.buttonStyle}>
                {this.props.item.itemName}
            </Button>
        );
    }
}

const mapStatetoProps = (state) => {
    return {

    };
};

export default connect(null, {chooseVote})(VoteModalItem);

const styles = {
    buttonStyle: {
        marginTop: 10,

    },
};