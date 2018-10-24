import React from 'react';
import { Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Card, CardSection } from '../../common';
import { Button } from 'react-native-elements';

import { TextField } from '../../../utils/form_components';

export default SignupFormComponent = ({ handleSubmit, onSubmit }) => (
    <View>
        <Card>
            <CardSection>
                <Field
                    name="email"
                    label="Email"
                    placeholder="Your Email"
                    keyboardType="email-address"
                    component={TextField}
                />
            </CardSection>
            <CardSection>
                <Field
                    name="password"
                    label="Password"
                    placeholder="Your Password"
                    secureTextEntry={true}
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
                    large title='Create an Account'
                    onPress={handleSubmit(onSubmit)}
                />
        
    </View>
);

const styles = StyleSheet.create({
    button: {
        flex: 1,
        elevation: 0,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 2,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
})