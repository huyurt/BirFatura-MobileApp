import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import {navigate} from "../references/navigationReference";
import URI from '../services/birfatura/uri';
import {SignInApi} from '../services/birfatura/BirFaturaApi';

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

const signIn = (dispatch) => async ({eposta, sifre}) => {
    try {
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', eposta);
        params.append('password', sifre);
        const response = await SignInApi.post(URI.signInPath, params);
        await AsyncStorage.setItem('token', JSON.stringify(response.data));
        dispatch({type: 'sign_in', payload: response.data});

        //navigate('TrackList');
    } catch (err) {
        dispatch({type: 'add_error', payload: 'Eposta veya şifre hatalı.'});
    }
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn},
    {token: null, errorMessage: ''}
);
