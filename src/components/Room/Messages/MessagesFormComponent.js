import React from 'react';
import { Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Button , Card, CardSection} from '../../common';

import { TextField } from '../../../utils/form_components';

export default MessagesFormComponent = ({ handleSubmit, onSubmit }) => (
    <View>
        <Card>
            <CardSection>
        <Field
            name="text"
            label="Message"
            placeholder="Send a message"
            component={TextField}
        />
        </CardSection>
        <CardSection>
        <Button onPress={handleSubmit(onSubmit)}>
            Send Message
        </Button>
        </CardSection>
        </Card>
    </View>
);
