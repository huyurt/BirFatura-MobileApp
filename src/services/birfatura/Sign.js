import {AsyncStorage} from 'react-native';
import axios from 'axios';
import URI from './uri'

const SignApi = axios.create({
    baseURL: URI.baseURL
});

export {SignApi};
