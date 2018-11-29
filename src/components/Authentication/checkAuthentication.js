import React from 'react';
import { connect } from "react-redux";
import { ImageBackground, StyleSheet } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Button } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

const backgroundImage = require('./assets/Chooseats_Logo_Tall.png');

import { authenticateUser, newUser } from '../../actions/users';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 10,
        paddingBottom: 25
    }
});


class CheckAuthentication extends React.Component {

    componentDidMount() {
        const { _authenticate, _newUser, user } = this.props;

        if (!user.accessToken) {
            console.log(user);
            Actions.landingScene();
            _newUser();
        } else {
            _authenticate(user.accessToken);
        }
    }

    componentWillReceiveProps(){
        console.log("componentWillReceiveProps");
        if(this.props.user.isNew){
            Actions.pop();
            Actions.landingScene();
        }
    }

    go = () => {
        Actions.reset('landingScene');
    }

    render() {
        return (
            <ImageBackground 
                resizeMode='cover' 
                style={styles.container} 
                source={backgroundImage} 
                accessibilityLabel="checkAuthentication-background">
                <Animatable.View animation="slideInLeft">
                    <Button 
                        buttonStyle={{ marginVertical: 5, backgroundColor: '#9b6400' }} 
                        large title='Go' onPress={this.go} 
                        accessibilityLabel="checkAuthentication-button-go"/>
                </Animatable.View>
            </ImageBackground>
        );
    }
}

const mapStatetoProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => ({
    _authenticate: (accessToken) => dispatch(authenticateUser(accessToken)),
    _newUser: () => dispatch(newUser())
});

export default connect(mapStatetoProps, mapDispatchToProps)(CheckAuthentication);


