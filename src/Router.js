import React from 'react';
import { Scene, Router, ActionConst, Actions } from 'react-native-router-flux';

import Authentication from './components/Authentication';
import Signup from './components/Authentication/SignUp/FormContainer';
import Login from './components/Authentication/Login/LoginForm';
import RoomLobbyContainer from './components/Rooms/RoomLobbyContainer';
import roomList from './components/Rooms/RoomList';

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
                    <Scene
                        key="signupModal"
                        direction="vertical"
                        component={Signup}
                        title="Please Signup"
                        
                    />
                    <Scene
                        key="loginModal"
                        direction="vertical"
                        component={Login}
                        title="Please Login"
                        
                    />
                </Scene>
                <Scene key = "rooms">
                    <Scene
                        key="checkScene"
                        component={RoomLobbyContainer}
                        type={ActionConst.REPLACE}
                    />
                     <Scene
                        key="roomList"
                        component={roomList}
                        title="Rooms"
                    />
                </Scene>
            </Scene>
        </Router>
    );

};

export default RouterComponent;