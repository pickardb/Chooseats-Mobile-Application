import React from 'react';
import { connect } from "react-redux";
import { ImageBackground, StyleSheet } from 'react-native';
import { Actions } from "react-native-router-flux";
import { Button } from '../common';

const backgroundImage = require('./assets/Chooseats_Logo_Tall.png');

import { authenticateUser, newUser } from '../../actions/users';


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
            Actions.landingScene();
        }
    }

    go = () => {
        Actions.reset('landingScene');
    }

    render() {
        return (
            <ImageBackground resizeMode='cover' style={styles.container} source={backgroundImage} />
        );
    }
}

const mapStatetoProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = dispatch => ({
    _authenticate: (accessToken) => dispatch(authenticateUser(accessToken)),
    _newUser: () => dispatch(newUser())
});

export default connect(mapStatetoProps, mapDispatchToProps)(CheckAuthentication);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: 10,
        paddingBottom: 25
    }
});