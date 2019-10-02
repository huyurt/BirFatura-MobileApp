import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import CONSTANTS from '../assets/constants';
import URI from '../services/birfatura/uri';
import {navigate} from "../references/navigationReference";
import {SignApi} from '../services/birfatura/BirFaturaApi';
import {IsEmpty, EmailValidate} from "../references/validator";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'sign_in':
            return {...state, token: action.payload, onPressed: false, isErrorMessage: false};
        case 'sign_up':
            return {...state, onPressed: false, isErrorMessage: false};
        case 'button_active':
            return {...state, onPressed: true};
        case 'show_flash_message':
            return {...state, onPressed: false, message: action.payload, showMessage: true};
        case 'hide_flash_message':
            return {...state, onPressed: false, message: '', showMessage: false};
        case 'error_message':
            return {...state, isErrorMessage: true};
        default:
            return state;
    }
};

const signIn = (dispatch) => async ({email, password}) => {
    dispatch({type: 'button_active'});
    if (EmailValidate(email)) {
        try {
            const params = new URLSearchParams();
            params.append('grant_type', 'password');
            params.append('username', email);
            params.append('password', password);
            const response = await SignApi.post(URI.signInPath, params);

            await AsyncStorage.setItem('token', JSON.stringify(response.data));
            dispatch({type: 'sign_in', payload: response.data});
            dispatch({type: 'hide_flash_message'});
        } catch (error) {
            dispatch({type: 'show_flash_message', payload: 'E-posta veya şifre hatalı, kontrol ediniz.'});
            dispatch({type: 'error_message'});
        }
    } else {
        dispatch({type: 'show_flash_message', payload: CONSTANTS.INVALID_EMAIL});
        dispatch({type: 'error_message'});
    }
};

const signUp = (dispatch) => async ({nameSurname, email, password, companyName, mobilePhone}) => {
    dispatch({type: 'button_active'});
    let message = '';
    try {
        const response = await SignApi.post(URI.signUpPath, {
            'NameSurname': nameSurname,
            'Email': email,
            'Password': password,
            'CompanyName': companyName,
            'MobilePhone': mobilePhone
        });
        message = response.data;
    } catch (error) {
        message = error?.response?.data?.ExceptionMessage;
        dispatch({type: 'error_message'});
    }
    dispatch({type: 'show_flash_message', payload: message});
};

const forgotPassword = (dispatch) => async ({email}) => {
    dispatch({type: 'button_active'});
    let message = '';
    if (EmailValidate(email)) {
        try {
            const response = await SignApi.post(URI.forgotPasswordPath, {
                'Email': email
            });
            message = response.data;
        } catch (error) {
            message = error?.response?.data?.ExceptionMessage;
            dispatch({type: 'error_message'});
        }
    } else {
        message = CONSTANTS.INVALID_EMAIL;
        dispatch({type: 'error_message'});
    }
    dispatch({type: 'show_flash_message', payload: message});
};

const onShowMessage = (dispatch) => async ({message}) => {
    if (!IsEmpty(message)) {
        dispatch({type: 'show_flash_message', payload: message});
    }
};

const hideMessage = (dispatch) => async () => {
    dispatch({type: 'hide_flash_message'});
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signUp, forgotPassword, onShowMessage, hideMessage},
    {token: null, message: '', showMessage: false, onPressed: false, isErrorMessage: false}
);
