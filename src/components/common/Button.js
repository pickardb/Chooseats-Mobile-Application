import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        alignSelf: 'center',
        color: '#444',
        fontSize: 18,
        paddingTop: 10,
        paddingBottom: 10,
        fontFamily: 'sans-serif-medium',
        elevation: 2,
    },
    buttonStyle: {
        flex: 1,
        elevation: 0,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 2,
        borderColor: '#444',
        borderRadius: 2,
        marginLeft: 5,
        marginRight: 5,
        marginVertical: 5,
    }
});

const Button = (props) => {
    const {
        buttonStyle,
        textStyle
    } = styles;

    return (
        <TouchableOpacity onPress = {props.onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {props.children}
            </Text>
        </TouchableOpacity>
    );
};


export {Button};
