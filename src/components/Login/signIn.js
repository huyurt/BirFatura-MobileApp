import React from 'react';
import {StyleSheet, ViewPropTypes, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {Input} from "../common";
import {Button, CheckBox} from "react-native-elements";

const SignIn = props => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    {props.headerText}
                </Text>
            </View>
            <Input
                iconName='user'
                placeHolder='E-posta adresiniz'
            />
            <Input
                iconName='lock'
                placeHolder='Şifreniz'
            />
            <View style={styles.footerContainer}>
                <CheckBox
                    title='Beni Hatırla'
                    checked
                    textStyle={styles.footerCheckBoxText}
                    containerStyle={styles.footerCheckBoxContainer}
                />
                <Button
                    title='GİRİŞ YAP'
                    color={props.loginButtonColor}
                    accessibilityLabel='GİRİŞ YAP'
                    titleStyle={styles.footerButtonTitle}
                    containerStyle={styles.footerButtonContainer}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 10,
        paddingHorizontal: 10
    },
    header: {
        color: '#fff',
        fontSize: 13
    },
    footerContainer: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        flexDirection: 'row'
    },
    footerCheckBoxContainer: {
        backgroundColor: 'rgba(0,0,0,0)',
        borderWidth: 0,
        marginLeft: 0,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    footerCheckBoxText: {
        color: 'white',
        fontSize: 13,
        fontWeight: 'normal'
    },
    footerButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    footerButtonTitle: {
        fontSize: 11
    }
});

SignIn.propTypes = {
    headerText: PropTypes.string,
    loginButtonColor: PropTypes.string
};

SignIn.defaultProps = {
    headerText: 'Hesabınızla giriş yapabilirsiniz:',
    loginButtonColor: '#3598DC'
};

export {SignIn};
