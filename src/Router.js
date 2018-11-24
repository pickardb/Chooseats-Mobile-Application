import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';

import CheckAuthentication from './components/Authentication/checkAuthentication';
import Authentication from './components/Authentication';
import Signup from './components/Authentication/SignUp/FormContainer';
import Login from './components/Authentication/Login/LoginFormContainer';
import RoomCreate from './components/Rooms/RoomCreate';
import RoomLobbyContainer from './components/Rooms/RoomLobbyContainer';
import RoomList from './components/Rooms/RoomList';
import RoomJoin from './components/Rooms/RoomJoinContainer';
import RoomContainer from './components/Room/RoomContainer';
import RestaurantContainer from './components/Restaurants/RestaurantContainer';

const RouterComponent = () => {
    return (
        <Router
            navigationBarStyle={{ backgroundColor: '#ffb839' }}
            titleStyle={{ color: 'white' }}
            rightButtonTextStyle={{ color: "#FFFFFF" }}
        >
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
                        title="Chooseats Home"
                        initial
                    />
                    <Scene
                        key="roomList"
                        component={RoomList}
                        title="My Rooms"
                    />
                    <Scene
                        key="roomCreate"
                        title="Create a room"
                        component={RoomCreate}
                    />
                    <Scene
                        key="roomJoin"
                        component={RoomJoin}
                        title="Join a room"
                    />
                    <Scene
                        key="roomContainer"
                        component={RoomContainer}
                        title="Chat"
                        rightTitle="Restaurants"
                        onRight={() =>
                            Actions.restaurantContainer()
                        }
                        onBack={() =>
                            Actions.refresh({ key: "roomList" })
                        }
                    />
                    <Scene
                        key="restaurantContainer"
                        component={RestaurantContainer}
                        title="Restaurants"
                    />

                </Scene>
            </Scene>
        </Router>
    );

};



export default RouterComponent;