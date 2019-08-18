import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {Scroll, ImageBackground} from '../common';
import {Header, Logo, SignUp, SignIn, ForgotPass, Info} from './components';

class Login extends Component {
    render() {
        return (
            <ImageBackground
                imagePaths={[
                    require('../../assets/images/login/bg1.jpg'),
                    require('../../assets/images/login/bg2.jpg'),
                    require('../../assets/images/login/bg3.jpg'),
                    require('../../assets/images/login/bg4.jpg')
                ]}
            >
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
