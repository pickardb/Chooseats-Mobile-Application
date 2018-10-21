import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection} from '../common';

class ChatRoom extends Component {
    render(){
        const{roomName, id} = this.props;
        return(
            <View>
                <Card>
                    <CardSection>
                        <Text>
                            This Room's code is: 
                        </Text>
                        <Text>
                            {roomName}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Text>
                            This Room's id is: 
                        </Text>
                        <Text>
                            {id}
                        </Text>
                    </CardSection>
                </Card>
                <Text>
                    Chat room placeholder
                </Text>
            </View>
        );
    }

}

export default ChatRoom;