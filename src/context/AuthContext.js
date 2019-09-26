import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import {navigate} from "../references/navigationReference";
import URI from '../services/birfatura/uri';
import {SignApi} from '../services/birfatura/BirFaturaApi';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'sign_in':
            return {...state, token: action.payload, onPressed: false};
        case 'sign_up':
            return {...state, onPressed: false};
        case 'forgot_password':
            return {...state, onPressed: false};
        case 'button_active':
            return {...state, onPressed: true};
        case 'button_diactive':
            return {...state, onPressed: false};
        case 'show_flash_message':
            return {...state, message: action.payload, showMessage: true};
        case 'hide_flash_message':
            return {...state, message: '', showMessage: false};
        default:
            return state;
    }
};

const signIn = (dispatch) => async ({email, password}) => {
    try {
        dispatch({type: 'button_active'});
        const params = new URLSearchParams();
        params.append('grant_type', 'password');
        params.append('username', email);
        params.append('password', password);
        const response = await SignApi.post(URI.signInPath, params);

        await AsyncStorage.setItem('token', JSON.stringify(response.data));
        dispatch({type: 'sign_in', payload: response.data});
        dispatch({type: 'hide_flash_message'});
    } catch (error) {
        dispatch({type: 'button_diactive'});
        dispatch({type: 'show_flash_message', payload: 'E-posta veya şifre hatalı, kontrol ediniz.'});
    }
};

const signUp = (dispatch) => async ({nameSurname, email, password, companyName, mobilePhone}) => {
    try {
        dispatch({type: 'button_active'});
        const response = await SignApi.post(URI.signUpPath, {
            'NameSurname': nameSurname,
            'Email': email,
            'Password': password,
            'CompanyName': companyName,
            'MobilePhone': mobilePhone
        });
        dispatch({type: 'hide_flash_message'});
    } catch (error) {
        dispatch({type: 'button_diactive'});
        dispatch({type: 'show_flash_message', payload: error?.response?.data?.ExceptionMessage});
    }
};

const forgotPassword = (dispatch) => async ({email}) => {
    try {
        dispatch({type: 'button_active'});
        const response = await SignApi.post(URI.forgotPasswordPath, {
            'Email': email
        });
        dispatch({type: 'forgot_password'});
        dispatch({type: 'show_flash_message', payload: response.data});
    } catch (error) {
        dispatch({type: 'button_diactive'});
        dispatch({type: 'show_flash_message', payload: error?.response?.data?.ExceptionMessage});
    }
};

const hideMessage = (dispatch) => async () => {
    dispatch({type: 'hide_flash_message'});
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signUp, forgotPassword, hideMessage},
    {token: null, message: '', showMessage: false, onPressed: false}
);
