import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import {navigate} from "../references/navigationReference";
import URI from '../services/birfatura/uri';
import {SignApi} from '../services/birfatura/BirFaturaApi';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return {...state, errorMessage: action.payload};
        case 'sign_in':
            return {errorMessage: '', token: action.payload};
        default:
            return state;
    }
};

const signIn = (dispatch) => async ({email, password}) => {
    try {
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', email);
        params.append('password', password);
        const response = await SignApi.post(URI.signInPath, params);

        console.log(response.data);

        await AsyncStorage.setItem('token', JSON.stringify(response.data));
        dispatch({type: 'sign_in', payload: response.data});

        //navigate('TrackList');
    } catch (error) {
        dispatch({type: 'add_error', payload: 'Eposta veya şifre hatalı.'});
    }
};

const signUp = (dispatch) => async ({email, password, passwordValidate}) => {
    try {
        const body = {
            'Email': email,
            'Password': password,
            'PasswordValidate': passwordValidate
        };
        const response = await SignApi.post(URI.signUpPath, body, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        dispatch({type: 'add_error', payload: error.response.data.message});
    }
};

const forgotPassword = (dispatch) => async (email) => {
    try{
        const body = {
            'Email': email,
            'Password': '******',
            'PasswordValidate': '******'
        };
        const response = await SignApi.post(URI.forgotPasswordPath, body, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        dispatch({type: 'add_error', payload: response.data});
    } catch (error) {
        dispatch({type: 'add_error', payload: error.response.data.message});
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signUp, forgotPassword},
    {token: null, errorMessage: ''}
);
