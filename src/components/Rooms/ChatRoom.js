import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';

import { getMessages, addMessage } from '../../actions/messages';
import feathersClient from '../../feathers/index';
import MessagesList from '../Messages/MessagesList';

class ChatRoom extends Component {
    componentDidMount() {
        const { _getMessages, id } = this.props;
        feathersClient.service('messages').on('created', (message, context) => {
            //_addMessage(message);
        });
        _getMessages(id);
    }


    render() {
        const { roomName, id, messages } = this.props;
        return (
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
                <Card>
                    <CardSection>
                        {!messages.isLoading &&
                            <MessagesList messages={messages.messages} />
                        }
                    </CardSection>
                </Card>
            </View>
        );
    }

}

const mapStatetoProps = state => {
    return {
        messages: state.messages
    };
};

const mapDispatchToProps = dispatch => ({
    _getMessages: (roomId) => dispatch(getMessages(roomId))
});

export default connect(mapStatetoProps, mapDispatchToProps)(ChatRoom);