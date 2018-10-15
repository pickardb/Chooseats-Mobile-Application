import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import Authentication from './components/Authentication';
import Signup from './components/Authentication/SignUp/FormContainer';
import Login from './components/Authentication/Login/LoginForm';
import { Check } from './components/Check';



const RouterComponent = () => {
    return (
        <Router>
            <Scene key="RootScene" hideNavBar>
                <Scene key="MainScene">
                    <Scene
                        key="Authenticate"
                        component={Authentication}
                        initial
                        hideNavBar
                    />
                    <Scene
                        key="checkScene"
                        component={Check}
                    />
                    <Scene
                        key="signupModal"
                        direction="vertical"
                        component={Signup}
                        title="Modal"
                        hideNavBar
                    />
                    <Scene
                        key="loginModal"
                        direction="vertical"
                        component={Login}
                        title="Modal"
                        hideNavBar
                    />
                </Scene>
            </Scene>
        </Router>
    );

};

export default RouterComponent;