import React from 'react';
import { Field } from 'redux-form';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';

import { TextField } from '../../../utils/form_components';

export default SignupFormComponent = ({ handleSubmit, onSubmit }) => (
    <View>
        <Field
            name="email"
            label="Email"
            placeholder="your email"
            keyboardType="email-address"
            component={TextField}
        />

        <Field
            name="password"
            label="Password"
            placeholder="your password"
            secureTextEntry={true}
            component={TextField}
        />


        <TouchableOpacity onPress={handleSubmit(onSubmit)}>
            <Text style={styles.button}>Create an Account</Text>
        </TouchableOpacity>
    </View>
);

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'blue',
        color: 'white',
        height: 30,
        lineHeight: 30,
        marginTop: 10,
        textAlign: 'center',
        width: 250
    }
})