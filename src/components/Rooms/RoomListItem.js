import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { CardSection, Card } from '../common';
import { Actions } from 'react-native-router-flux';

class RoomListItem extends Component {
    
   
    onRowPress() {
        const {roomName, id} = this.props
        Actions.chatRoom({ roomName, id });
    }
    render() {
        const {roomName, id} = this.props
        return (
            <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
                <View>
                    <CardSection>
                        <Text>
                            {roomName}
                        </Text>
                        <Text>
                            {id}
                        </Text>
                    </CardSection>
                </View>
            </TouchableWithoutFeedback>
        );
    }
};

export default RoomListItem;