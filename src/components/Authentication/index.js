import React, { Component } from 'react';
import { View, Image, ImageBackground, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const backgroundImage = require('./assets/bg.jpeg');

export default class Authentication extends Component {
    render() {
        return (
            <ImageBackground
                resizeMode='cover'
                style={styles.container}
                source={backgroundImage}>

                <SocialIcon
                    title='Sign In With Facebook'
                    button
                    type='facebook'
                />

                <SocialIcon
                    title='Sign In With Google'
                    button
                    type='google-plus-official'
                    onPress={() => this.props.navigation.replace('Lobby')}
                />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 10,
        paddingBottom: 25
    }
});