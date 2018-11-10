import React from 'react';
import { View, StyleSheet } from 'react-native';
import { FormLabel, FormInput, Input, FormValidationMessage, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
    inlineButtonContainer: {
    }
})

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

export const TextFieldInlineButton = ({ input, placeholder, secureTextEntry, autoCorrect, meta: { touched, error } }) => (
    <View style={styles.inlineButtonContainer}>
        <FormInput
            {...input}
            placeholder={placeholder}
            autoCorrect={autoCorrect}
            secureTextEntry={secureTextEntry}
            containerStyle={styles.input}
            inputStyle={{ width: undefined }}
            multiline
            numberOfLines={1}
        />
    </View >
);

