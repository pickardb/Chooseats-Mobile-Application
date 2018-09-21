import React, { Component } from 'react';
import { View, Text } from 'react-native';
import io from 'socket.io-client';


export default class Lobby extends Component {
    constructor() {
        super();
        const socket = io('http://128.189.73.78:3000');
        socket.on('connect', function () {
            socket.emit('chat message', 'hi');


        });
    }
    render() {
        return (
            <View>
                <Text>Hello This is a lobby</Text>
            </View>
        );
    }
} 