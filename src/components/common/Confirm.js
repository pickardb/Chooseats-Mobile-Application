import React from 'react';
import {Text,View,Modal} from 'react-native';
import {CardSection} from './CardSection';
import {Button} from './Button';

const styles = {
    cardSectionStyle: {
        justifyContent: 'center'
    },
    textSyle: {
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40
    },
    containerStyle: {
        backgroundColor: 'rgba(0,0,0,0.75)',
        position: 'relative',
        flex: 1,
        flexDirection: 'vertical',
        justifyContent: 'center'
    }
};

const Confirm = ({children, visible, onAccept, onDecline}) => {
    const {containerStyle,textSyle,cardSectionStyle} = styles;
    
    return (
        <Modal
            animationType="slide"
            onRequestClose={() => {}}
            transparent
            visible={visible}
        >
            <View stlye={containerStyle}>
               <CardSection style={cardSectionStyle}>
                   <Text style={textSyle}>
                        {children}
                   </Text>
               </CardSection>
               <CardSection>
                   <Button onPress={onAccept}>
                       Yes
                   </Button>
                   <Button onPress={onDecline}>
                       No
                   </Button>
               </CardSection>
            </View>
        </Modal>
    );
};


export {Confirm};
