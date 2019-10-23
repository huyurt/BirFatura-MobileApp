import React from "react";
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FlashMessage from "react-native-flash-message";
import {setNavigator} from "./src/utilities/navigationReference";
import {Provider as AuthProvider} from './src/context/AuthContext';
import SignInScreen from './src/screens/SignInScreen';
import SignUpScreen from "./src/screens/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/ForgotPasswordScreen";

const navigator = createSwitchNavigator({
    loginFlow: createStackNavigator({
        SignIn: SignInScreen,
        SignUp: SignUpScreen,
        ForgotPassword: ForgotPasswordScreen
    })
});

const App = createAppContainer(navigator);

export default () => {
    return (
        <AuthProvider>
            <App ref={nav => {
                setNavigator(nav);
            }}/>
            <FlashMessage/>
        </AuthProvider>
    );
};
