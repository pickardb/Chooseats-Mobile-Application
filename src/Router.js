import React from 'react';
import { Scene, Router, ActionConst } from 'react-native-router-flux';

import Authentication from './components/Authentication';
import Signup from './components/Authentication/SignUp/FormContainer';
import Login from './components/Authentication/Login/LoginForm';
import RoomLobbyContainer from './components/Rooms/RoomLobbyContainer';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="main">
                    <Scene
                        key="Authenticate"
                        component={Authentication}
                        initial
                        hideNavBar
                    />
                </Scene>
                <Scene key = "rooms">
                    <Scene
                        key="checkScene"
                        component={RoomLobbyContainer}
                        type={ActionConst.REPLACE}
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