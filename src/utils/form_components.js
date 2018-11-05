import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Input, FormValidationMessage, Icon } from 'react-native-elements';

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

export const TextFieldInlineButton = ({ input, label, placeholder, secureTextEntry, autoCorrect, meta: { touched, error } }) => (
    <View style={styles.inlineButtonContainer}>
        <FormInput
            {...input}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
            inputStyle={{ width: undefined }}
            multiline
        />
        <Icon name='send' />
    </View>
);

const styles = StyleSheet.create({
    inlineButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }
})