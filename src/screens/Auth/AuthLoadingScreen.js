import React from 'react';
import {StyleSheet, View, AsyncStorage, Image} from 'react-native';
import {navigate} from "../../utilities/navigationReference";
import {setToken, userToken} from "../../utilities/useToken";

class AuthLoadingScreen extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            setToken().then(() => {
                if (!userToken.rememberMe) {
                    AsyncStorage.removeItem('token').then(() => navigate('SignIn'));
                } else if (userToken.token) {
                    navigate('Dashboard');
                }
            });
        }, 2000);
    }

    render() {
        return (
            <View style={styles.container}>
                <Image
                    resizeMode="contain"
                    style={styles.image}
                    source={require('../../assets/images/birfatura.png')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
        paddingVertical: 10
    },
    image: {
        height: 50,
        position: 'relative'
    }
});

export default AuthLoadingScreen;
