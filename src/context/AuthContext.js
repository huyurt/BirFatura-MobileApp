import {AsyncStorage} from 'react-native';
import createDataContext from "./createDataContext";
import CONSTANTS from '../assets/constants';
import URI from '../services/birfatura/uri';
import {navigate} from "../utilities/navigationReference";
import {SignApi} from '../services/birfatura/BirFaturaApi';
import {IsEmpty, EmailValidate} from "../utilities/validator";

const authReducer = (state, action) => {
    switch (action.type) {
        case 'sign_up':
            return {...state, token: action.payload};
        case 'button_active':
            return {...state, onPressed: true};
        case 'button_diactive':
            return {...state, onPressed: false};
        case 'show_flash_message':
            return {...state, message: action.payload};
        case 'hide_flash_message':
            return {...state, message: ''};
        default:
            return state;
    }
};

const signIn = (dispatch) => async ({email, password}) => {
    dispatch({type: 'button_active'});
    if (EmailValidate(email) && !IsEmpty(password)) {
        try {
            const params = new URLSearchParams();
            params.append('grant_type', 'password');
            params.append('username', email);
            params.append('password', password);
            const response = await SignApi.post(URI.signInPath, params);

            // mesajın doğruluk kontrolü yapılacak
            await AsyncStorage.setItem('token', JSON.stringify(response.data));
            dispatch({type: 'sign_up', payload: response.data.token});
            dispatch({type: 'hide_flash_message'});
        } catch (error) {
            dispatch({type: 'show_flash_message', payload: CONSTANTS.INVALID_EMAIL_OR_PASSWORD});
        }
    } else {
        dispatch({type: 'show_flash_message', payload: CONSTANTS.INVALID_EMAIL_OR_PASSWORD});
    }
    dispatch({type: 'button_diactive'});
};

const signUp = (dispatch) => async ({nameSurname, email, password, companyName, mobilePhone}) => {
    dispatch({type: 'button_active'});
    dispatch({type: 'hide_flash_message'});
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
    }
    dispatch({type: 'show_flash_message', payload: message});
    dispatch({type: 'button_diactive'});
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
        }
    } else {
        message = CONSTANTS.INVALID_EMAIL;
    }
    dispatch({type: 'show_flash_message', payload: message});
    dispatch({type: 'button_diactive'});
};

const onShowMessage = (dispatch) => async ({message}) => {
    if (!IsEmpty(message)) {
        dispatch({type: 'show_flash_message', payload: message});
    }
};

const onHideMessage = (dispatch) => async () => {
    dispatch({type: 'hide_flash_message'});
};

export const {Provider, Context} = createDataContext(
    authReducer,
    {signIn, signUp, forgotPassword, onShowMessage, onHideMessage},
    {token: null, message: '', onPressed: false}
);
