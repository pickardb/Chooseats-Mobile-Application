import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import Authentication from './components/Authentication';
import {Check} from './components/Check';

const RouterComponent = () => {
    return (
        <Router>
            <Scene key="RootScene" hideNavBar>
                <Scene key="MainScene">
                    <Scene
                        key="Authenticate"
                        component={Authentication}
                        initial
                    />
                    <Scene
                        key="checkScene"
                        component={Check}
                    />
                </Scene>
            </Scene>
        </Router>
    );

};

export default RouterComponent;