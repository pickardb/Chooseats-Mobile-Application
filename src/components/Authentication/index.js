import React, { Component } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as Animatable from 'react-native-animatable';
import { feathersAuthentication } from '../../feathers';

import SignupFormContainer from './SignUp/FormContainer';
const backgroundImage = require('./assets/bg.jpeg');

class Authentication extends Component {

    constructor() {
        super();
        this.state = { showLogin: false, showSignup: false }
    }

    static navigationOptions = { header: null };

    render() {
        const { showSignup, showLogin } = this.state;

        return (
            <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>


                {showSignup && <Animatable.View animation="fadeIn" style={styles.form}>
                    <SignupFormContainer />
                </Animatable.View>}

                <Animatable.View animation="slideInLeft">
                    <Button large title='Sign Up' onPress={() => this.setState({ showSignup: true })} />
                </Animatable.View>
            </ImageBackground>
        );
    }
}

const mapStateToProps = state => ({
    auth: state.auth,
});

const mapDispatchToProps = dispatch => ({
    _login: (email, password) => dispatch(feathersAuthentication.authenticate({ strategy: 'local', email: email, password: password })),
})


export default connect(mapStateToProps, mapDispatchToProps)(Authentication);

const styles = StyleSheet.create({
    form: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 10,
        paddingBottom: 25,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 10,
        paddingBottom: 25
    }
});