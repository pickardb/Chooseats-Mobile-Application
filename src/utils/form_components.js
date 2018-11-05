import React from 'react';
import { TextInput, View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements';

export const TextField = ({ input, label, placeholder, secureTextEntry, autoCorrect, meta: { touched, error } }) => (
    <View>
        <FormLabel>{label}</FormLabel>
        <FormInput
            {...input}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
        />
        {touched && error && <FormValidationMessage>{error}</FormValidationMessage>}
    </View>
);