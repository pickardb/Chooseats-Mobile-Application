import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button } from '../../common';
import { emailChanged, passwordChanged, loginUser } from '../../../actions/users';


class LoginForm extends Component {
    onEmailChange(text) {
        this.props.emailChanged(text);
    }

    onPasswordChange(text) {
        this.props.passwordChanged(text);
    }

    onButtonPress() {
        this.props.loginUser({ email: this.props.email, password: this.props.password });
    }

    render() {
        return (
            <View>
                <Card>
                    <CardSection>
                        <Input
                            label="Email"
                            placeHolder="Enter your email"
                            onChangeText={this.onEmailChange.bind(this)}
                            value={this.props.email}
                        />
                    </CardSection>
                    <CardSection>
                        <Input
                            secureTextEntry
                            label="Password"
                            placeHolder="Enter your password"
                            onChangeText={this.onPasswordChange.bind(this)}
                            value={this.props.password}
                        />
                    </CardSection>
                    <CardSection>
                        <Button onPress={this.onButtonPress.bind(this)}>
                            Login
                        </Button>
                    </CardSection>
                </Card>
            </View>

        );
    }
}

const mapStatetoProps = state => {
    return {
        email: state.user.email,
        password: state.user.password
    };
};

export default connect(mapStatetoProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);

