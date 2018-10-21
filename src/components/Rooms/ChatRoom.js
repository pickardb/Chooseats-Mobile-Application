import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card, CardSection} from '../common';

class ChatRoom extends Component {
    render(){
        const{name, code, description} = this.props;
        return(
            <View>
                <Card>
                    <CardSection>
                        <Text>
                            This Room's name is: 
                        </Text>
                        <Text>
                            {name}
                        </Text>
                    </CardSection>
                    <CardSection>
                        <Text>
                            This Room's code is: 
                        </Text>
                        <Text>
                            {code}
                        </Text>
                    </CardSection>
                </Card>
                <Text>
                    {description}
                </Text>
            </View>
        );
    }

}

export default ChatRoom;