import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Spinner } from '../../common';
import { Button} from 'react-native-elements';
import { loginUser } from '../../../actions/users';
import { TextField } from '../../../utils/form_components';
import { Field } from 'redux-form';



const LoginForm = ({ handleSubmit, onSubmit, isLoggingIn }) => (
    < View >
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
            {isLoggingIn && <Card><CardSection><Spinner size="large" /></CardSection></Card>}
            {!isLoggingIn && <Button
                    buttonStyle={{
                        marginVertical: 10,
                        backgroundColor: '#c67f00',
                        elevation: 5
                    }}
                    large title='Login'
                    onPress={handleSubmit(onSubmit)}
                />}
        
    </View >

);



const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};

export default LoginForm;