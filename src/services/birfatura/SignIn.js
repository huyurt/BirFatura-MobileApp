import {AsyncStorage} from 'react-native';
import axios from 'axios';
import URI from './uri'

const SignInApi = axios.create({
    baseURL: URI.baseURL
});

export {SignInApi};
