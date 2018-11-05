import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';

const backgroundImage = require('./assets/Chooseats_Logo_Tall.png');

export default Authentication = () => (
    <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>
        <Animatable.View animation="slideInLeft">
            <Button buttonStyle = {{marginVertical: 5, backgroundColor: '#c67f00'}}large title='Sign Up' onPress={Actions.signupModal} />
        </Animatable.View>
        <Animatable.View animation="slideInLeft">
            <Button buttonStyle = {{marginVertical: 5, backgroundColor: '#c67f00'}} large title='Login' onPress={Actions.loginModal} />
        </Animatable.View>
    </ImageBackground>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 10,
        paddingBottom: 25
    }
});
