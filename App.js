import React from "react";
import {Platform, StatusBar} from 'react-native';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import FlashMessage from "react-native-flash-message";
import {setNavigator} from "./src/utilities/navigationReference";
import {Provider as AuthProvider} from './src/context/AuthContext';
import SignInScreen from './src/screens/Auth/SignInScreen';
import SignUpScreen from "./src/screens/Auth/SignUpScreen";
import ForgotPasswordScreen from "./src/screens/Auth/ForgotPasswordScreen";
import AuthLoadingScreen from "./src/screens/Auth/AuthLoadingScreen";
import DashboardScreen from "./src/screens/Dashboard";

const navigator = createSwitchNavigator({
        AuthLoading: AuthLoadingScreen,
        App: createStackNavigator({
                Dashboard: DashboardScreen
            }, {
                cardStyle: {
                    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
                },
            }
        ),
        Auth: createStackNavigator({
                SignIn: SignInScreen,
                SignUp: SignUpScreen,
                ForgotPassword: ForgotPasswordScreen
            }, {
                cardStyle: {
                    paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight
                },
            }
        )
    }, {
        initialRouteName: 'AuthLoading',
    }
);

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
