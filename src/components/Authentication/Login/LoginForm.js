import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Button, Spinner } from '../../common';
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

    renderError() {
        if (this.props.error) {
            return <View style={{ backgroundColor: 'white' }}>
                <CardSection>
                    <Text style={styles.errorTextStyle}>
                        {this.props.error}
                    </Text>
                </CardSection>
            </View>
        }
    }

    renderButton() {
        if (this.props.isLogginIn) {
            return <Spinner size="large" />;
        }
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
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

                    {this.renderError()}

                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>

        );
    }
}

const mapStatetoProps = state => {
    return {
        email: state.user.email,
        password: state.user.password,
        error: state.user.error,
        isLogginIn: state.user.isLogginIn
    };
};

export default connect(mapStatetoProps, {
    emailChanged,
    passwordChanged,
    loginUser
})(LoginForm);

const styles = {
    errorTextStyle:{
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};