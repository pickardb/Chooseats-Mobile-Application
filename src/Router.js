import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Authentication from './components/Authentication';
import {Check} from './components/Check';
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
                    />
                </Scene>
                <Scene key = "rooms">
                    <Scene
                        key="roomList"
                        component={roomList}
                        title="Rooms"
                        initial
                    />
                </Scene>
            </Scene>
        </Router>
    );

};

export default RouterComponent;