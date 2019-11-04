import React, {useEffect} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {userToken} from "../../utilities/useToken";

const DashboardScreen = ({navigation}) => {
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Dashboard</Text>
        </View>
    );
};

DashboardScreen.navigationOptions = () => {
    return {
        header: null
    }
};

const styles = StyleSheet.create({});

export default DashboardScreen;
