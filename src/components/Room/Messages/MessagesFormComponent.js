import React from 'react';
import { Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button } from '../../common';

import { TextField } from '../../../utils/form_components';

export default MessagesFormComponent = ({ handleSubmit, onSubmit }) => (
    <View>

        <Field
            name="text"
            label="Message"
            placeholder="Send a message"
            component={TextField}
        />
        <Button onPress={handleSubmit(onSubmit)}>
            Send Message
        </Button>
    </View>
);
