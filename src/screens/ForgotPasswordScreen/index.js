import React, {useContext} from 'react';
import {StyleSheet, View} from 'react-native';
import {Context as AuthContext} from '../../context/AuthContext';
import {Divider} from 'react-native-elements';
import {Scroll, ImageBackground} from '../../components';
import {Header, Logo, Info} from '../SignInScreen/components';
import {ForgotPasswordContainer} from './components';

const ForgotPasswordScreen = ({navigation}) => {
    const {state, forgotPassword, onShowMessage, onHideMessage} = useContext(AuthContext);

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
                        title="Şifremi Unuttum"
                    />
                    <Divider style={{marginBottom: 10, backgroundColor: 'white'}}/>
                    <ForgotPasswordContainer
                        headerText='Şifrenizi sıfırlamak için e-posta adresinizi girin:'
                        onSubmit={forgotPassword}
                        onShowMessage={onShowMessage}
                        onHideMessage={onHideMessage}
                        onPressed={state.onPressed}
                        message={state.message}
                    />
                </View>
                <Info/>
            </Scroll>
        </ImageBackground>
    );
};

ForgotPasswordScreen.navigationOptions = () => {
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

export default ForgotPasswordScreen;
