import React from 'react';
import { Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, CardSection } from '../../common';
import { Button, Icon } from 'react-native-elements';

import { TextFieldInlineButton } from '../../../utils/form_components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        minHeight: 50,
        maxHeight: 250
    },
    fieldContainer: {
        flex: 6
    },
    buttonContainer: {
        flex: 1,
        alignSelf: 'stretch',
        paddingTop: 20
    }
});

const MessagesFormComponent = ({ handleSubmit, onSubmit }) => (
    <View style={styles.container}>
        <View style={styles.fieldContainer}>
            <Field
                name="text"
                label="Message"
                placeholder="Send a message"
                component={TextFieldInlineButton}
            />
        </View>
        <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit(onSubmit)}
        >
            <Icon name="send" />
        </TouchableOpacity>
    </View>
);

export default MessagesFormComponent;
