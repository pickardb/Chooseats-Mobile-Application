import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import CheckAuthentication from './utils/checkAuthentication';
import Authentication from './components/Authentication';
import Signup from './components/Authentication/SignUp/FormContainer';
import Login from './components/Authentication/Login/LoginFormContainer';
import RoomCreate from './components/Rooms/RoomCreate';
import RoomLobbyContainer from './components/Rooms/RoomLobbyContainer';
import RoomList from './components/Rooms/RoomList';
import RoomJoin from './components/Rooms/RoomJoin';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="root" hideNavBar>
                <Scene key="authenticate">
                    <Scene
                        key="checkAuthentication"
                        component={CheckAuthentication}
                        initial
                        hideNavBar
                    />
                </Scene>
                <Scene key="landingScene">
                    <Scene
                        key="landingPage"
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

                <Scene key="rooms">
                    <Scene
                        key="Lobby"
                        component={RoomLobbyContainer}
                        title="Home Screen"
                        initial
                    />
                    <Scene
                        key="roomList"
                        component={RoomList}
                        title="Your Rooms"
                        rightTitle="Create"
                        onRight={() =>
                            Actions.roomCreate()
                        }
                    />
                    <Scene
                        key="roomCreate"
                        component={RoomCreate}
                        title="Create a room"
                    />
                    <Scene
                        key="roomJoin"
                        component={RoomJoin}
                        title="Join a room"
                    />
                </Scene>
            </Scene>
        </Router>
    );

};



export default RouterComponent;