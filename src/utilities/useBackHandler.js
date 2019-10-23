import {useEffect} from 'react';
import {BackHandler} from "react-native";

const backHandler = (event) => useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', event);
    return () => {
        BackHandler.removeEventListener('hardwareBackPress', event);
    }
}, []);

export default backHandler;
