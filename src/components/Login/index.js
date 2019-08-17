import React, {Component} from 'react';
import {StyleSheet, View, ImageBackground} from 'react-native';
import {Divider} from 'react-native-elements';
import {Scroll} from '../common';
import {Header, Logo, SignUp, SignIn, ForgotPass, Info} from './components';

class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../../assets/images/login/bg1.jpg')}
                             style={{width: '100%', height: '100%'}}>
                <Scroll>
                    <Logo/>
                    <View style={styles.container}>
                        <Header/>
                        <Divider style={{marginBottom: 10, backgroundColor: 'white'}}/>
                        <SignUp/>
                        <SignIn/>
                        <ForgotPass/>
                    </View>
                    <Info/>
                </Scroll>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        marginTop: 40,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        borderRadius: 7
    }
});

export default Login;
