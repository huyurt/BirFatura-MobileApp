import React from "react";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {setNavigator} from "./src/references/navigationReference";
import {Provider as AuthProvider} from './src/context/AuthContext';
import SignInScreen from './src/screens/SignInScreen';

const navigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        SignIn: SignInScreen
    })
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={nav => {
                setNavigator(nav);
            }}/>
        </AuthProvider>
    );
};
