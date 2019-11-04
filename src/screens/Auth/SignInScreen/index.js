import React, {useContext, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {NavigationEvents} from "react-navigation";
import {hideMessage, showMessage} from "react-native-flash-message";
import {Scroll, ImageBackground} from '../../../components';
import {Header, Logo, SignUpContainer, SignInContainer, ForgotPass, Info} from './components';
import {Context as AuthContext} from '../../../context/AuthContext';

const SignInScreen = ({navigation}) => {
    const {state, signIn, onShowMessage, onHideMessage} = useContext(AuthContext);

    useEffect(() => {
        if (state.message !== '') {
            setTimeout(() => showMessage({
                message: state.message,
                position: 'bottom',
                autoHide: false,
                animated: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                onPress: () => {
                    messageHide();
                }
            }));
        }
    }, [state.message]);

    const messageHide = () => {
        setTimeout(() => {
            if (state.message !== '') {
                hideMessage();
                onHideMessage();
            }
        });
    };

    return (
        <ImageBackground
            imagePaths={[
                require('../../../assets/images/login/bg1.jpg'),
                require('../../../assets/images/login/bg2.jpg'),
                require('../../../assets/images/login/bg3.jpg'),
                require('../../../assets/images/login/bg4.jpg')
            ]}
        >
            <NavigationEvents onWillFocus={() => messageHide()}/>
            <Scroll>
                <Logo/>
                <View style={styles.container}>
                    <Header
                        title="Bir Fatura'ya Hoş Geldiniz"
                    />
                    <Divider style={{marginBottom: 10, backgroundColor: 'white'}}/>
                    <SignUpContainer
                        messageHide={messageHide}
                    />
                    <SignInContainer
                        headerText='Hesabınızla giriş yapabilirsiniz:'
                        onSubmit={signIn}
                        onShowMessage={onShowMessage}
                        onPressed={state.onPressed}
                        messageHide={messageHide}
                    />
                    <ForgotPass
                        headerText='Şifrenizi Unuttunuz Mu?'
                        mainLinkText='Buraya'
                        mainText=' tıklayarak şifrenizi sıfırlamayı talep edebilirsiniz.'
                        messageHide={messageHide}
                    />
                </View>
                <Info/>
            </Scroll>
        </ImageBackground>
    );
};

SignInScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        borderRadius: 7
    }
});

export default SignInScreen;
