//Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

const styles = {
    viewStyle: {
        backgroundColor: '#ffa400',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        paddingTop: 0,
        paddingBottom: 10,
        elevation: 10
    },
    textStyle: {
        fontSize: 20,
        color: '#000'
    }
};

//Make a component
const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style = {viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};


//Make the component available to the other parts of the app
export  {Header};
