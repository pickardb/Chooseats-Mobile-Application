import React from 'react';
import { Field } from 'redux-form';
import { View, StyleSheet } from 'react-native';
import { Card, CardSection } from '../../common';
import { Button } from 'react-native-elements';

import { TextFieldInlineButton } from '../../../utils/form_components';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red'
    }
})

const MessagesFormComponent = ({ handleSubmit, onSubmit }) => (
    <View style={styles.container}>
        <Field
            name="text"
            label="Message"
            placeholder="Send a message"
            component={TextFieldInlineButton}
        />
    </View>
);

export default MessagesFormComponent;
