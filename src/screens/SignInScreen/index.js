import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Divider} from 'react-native-elements';
import {Scroll, ImageBackground} from '../../components';
import {Header, Logo, SignUpContainer, SignInContainer, ForgotPass, Info} from './components';
import {Context as AuthContext} from '../../context/AuthContext';
import {hideMessage as flashHideMessage} from "react-native-flash-message";

const SignInScreen = ({navigation}) => {
    const {state, signIn, onShowMessage, onHideMessage} = useContext(AuthContext);

    const messageHide = () => {
        setTimeout(() => {
            flashHideMessage();
            onHideMessage();
        });
    };

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
                        onHideMessage={onHideMessage}
                        onPressed={state.onPressed}
                        message={state.message}
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
        marginTop: 40,
        paddingHorizontal: 10,
        paddingVertical: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,0.6)',
        borderRadius: 7
    }
});

export default SignInScreen;
