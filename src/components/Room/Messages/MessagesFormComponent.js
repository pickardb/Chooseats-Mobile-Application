import React from 'react';
import { Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card, CardSection} from '../../common';
import {Button} from 'react-native-elements';

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
        </Card>
        <Button
                    buttonStyle={{
                        marginVertical: 10,
                        backgroundColor: '#c67f00',
                        elevation: 5
                    }}
                    large title=' Send Message'
                    onPress={handleSubmit(onSubmit)}
                />
        
        
    </View>
);
