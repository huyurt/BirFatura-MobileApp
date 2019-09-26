import React, {useContext} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Context as AuthContext} from '../../context/AuthContext';
import {Divider} from 'react-native-elements';
import {Scroll, ImageBackground} from '../../components';
import {Header, Logo, Info} from '../SignInScreen/components';
import {SignUpContainer} from './components';

const SignUpScreen = ({navigation}) => {
    const {state, signUp} = useContext(AuthContext);

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
                        title="Bir Fatura'ya Üye Ol"
                    />
                    <Divider style={{marginBottom: 10, backgroundColor: 'white'}}/>
                    <View style={styles.headerContainer}>
                        <Text style={styles.header}>
                            Üye olmak için formu doldurun:
                        </Text>
                    </View>
                    <SignUpContainer
                        onSubmit={signUp}
                    />
                </View>
                <Info/>
            </Scroll>
        </ImageBackground>
    );
};

SignUpScreen.navigationOptions = () => {
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
    },
    headerContainer: {
        marginBottom: 10,
        paddingHorizontal: 10
    },
    header: {
        color: '#fff',
        fontSize: 13
    }
});

export default SignUpScreen;
