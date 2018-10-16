import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from '../../common';
import { loginUser } from '../../../actions/users';
import { TextField } from '../../../utils/form_components';
import { Field } from 'redux-form';



export default LoginForm = ({ handleSubmit, onSubmit, isLoggingIn }) => (
    < View >
        <Card>
            <CardSection>
                <Field
                    name="email"
                    label="Email"
                    placeholder="your email"
                    keyboardType="email-address"
                    component={TextField}
                />
            </CardSection>
            <CardSection>
                <Field
                    name="password"
                    label="Password"
                    placeholder="your password"
                    secureTextEntry={true}
                    component={TextField}
                />
            </CardSection>
            <CardSection>
                {isLoggingIn && <Spinner size="large" />}
                {!isLoggingIn &&
                    <Button onPress={handleSubmit(onSubmit)}>
                        Login
            </Button>}
            </CardSection>
        </Card>
    </View >

);



const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};