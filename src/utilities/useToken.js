import {AsyncStorage} from "react-native";
import moment from "moment";
import {navigate} from './navigationReference';
import {hideMessage, showMessage} from "react-native-flash-message";

const userToken = {
    get token() {
        validateToken();
        return userTokenObject.token;
    },
    get expiryDate() {
        validateToken();
        return userTokenObject.expiryDate;
    },
    get userId() {
        validateToken();
        return userTokenObject.userId;
    },
    get userName() {
        validateToken();
        return userTokenObject.userName;
    },
    get rememberMe() {
        validateToken();
        return userTokenObject.rememberMe;
    },
    get() {
        validateToken();
    }
};

const userTokenObject = {
    token: null,
    expiryDate: moment('1900-01-01'),
    userId: null,
    userName: null,
    rememberMe: true
};

function cleanUserTokenObject() {
    setTimeout(() => {
        if (userTokenObject?.token) {
            showMessage({
                message: 'Oturum süreniz dolmuştur, tekrar giriş yapınız.',
                position: 'bottom',
                autoHide: false,
                animated: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                onPress: () => hideMessage()
            });
        }
    });

    userTokenObject.token = null;
    userTokenObject.expiryDate = moment('1900-01-01');
    userTokenObject.userId = null;
    userTokenObject.userName = null;
    userTokenObject.rememberMe = true;
}

function validateToken() {
    if (moment(userTokenObject?.expiryDate) <= moment()) {
        cleanUserTokenObject();
        navigate('SignIn');
    }
}

const setToken = async () => {
    try {
        let tokenData = JSON.parse(await AsyncStorage.getItem('token'));
        if (tokenData != null) {
            let expiryDate = moment(tokenData['.expires']).add(-2, 'days');
            if (expiryDate <= moment()) {
                await AsyncStorage.removeItem('token');
                navigate('SignIn');
            }

            userTokenObject.token = tokenData['access_token'];
            userTokenObject.expiryDate = expiryDate;
            userTokenObject.userId = tokenData['UserId'];
            userTokenObject.userName = tokenData['userName'];
            userTokenObject.rememberMe = tokenData['rememberMe'];
            return;
        }
    } catch (err) {
    }
    await AsyncStorage.removeItem('token');
    navigate('SignIn');
};

export {setToken, userToken};
