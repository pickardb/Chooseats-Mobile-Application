import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection, Card } from '../common';
import { Actions } from 'react-native-router-flux';
import { black } from 'ansi-colors';

class RoomListItem extends Component {
    
   
    onRowPress() {
        const {name, code, description} = this.props
        Actions.chatRoom({ name, code, description});
    }
    render() {
        const {name, code, description} = this.props
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection style={Styles.itemStyle}>
                        <Text style={Styles.titleStyle}>
                            {name}
                        </Text>
                        <Text style={Styles.idStyle}>
                          {code}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

export default RoomListItem;

const Styles = {
    titleStyle:{
        fontSize: 24,
        color: 'black',
        flex: 1
    },
    idStyle: {
        fontSize: 18,
        color: 'black'
    },
    itemStyle: {
        flex: 1,
        flexDirection: 'column'
    }
};