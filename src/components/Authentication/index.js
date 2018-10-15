import React from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { Actions } from 'react-native-router-flux';

const backgroundImage = require('./assets/bg.jpeg');

<<<<<<< HEAD
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
                {showLogin && <Animatable.View animation="fadeIn" style={styles.form}>
                    <LoginForm />
                </Animatable.View>}

                    <Animatable.View animation="slideInLeft">
                        <Button large title='Sign Up' onPress={() => this.setState({ showLogin: false, showSignup: true })} />
                    </Animatable.View>
                    <Animatable.View animation="slideInLeft">
                        <Button large title='Login' onPress={() => this.setState({ showSignup: false, showLogin: true })} />
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
=======
export default Authentication = () => (
    <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage}>
        <Animatable.View animation="slideInLeft">
            <Button large title='Sign Up' onPress={Actions.signupModal} />
        </Animatable.View>
        <Animatable.View animation="slideInLeft">
            <Button large title='Login' onPress={Actions.loginModal} />
        </Animatable.View>
    </ImageBackground>
);
>>>>>>> 8c50cefceb0d3a15b40fca4fa6a6f795c9510c90

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 10,
        paddingBottom: 25
    }
});