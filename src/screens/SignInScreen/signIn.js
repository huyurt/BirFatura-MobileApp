import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput} from "../../components";
import {Button, CheckBox} from "react-native-elements";

const SignInContainer = ({headerText, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    {headerText}
                </Text>
            </View>
            <CustomInput
                iconName='user'
                placeHolder='E-posta adresiniz'
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />
            <CustomInput
                password={true}
                iconName='lock'
                placeHolder='Şifreniz'
                autoCapitalize='none'
                autoCorrect={false}
                value={password}
                onChangeText={setPassword}
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
                    accessibilityLabel='GİRİŞ YAP'
                    titleStyle={styles.footerButtonTitle}
                    containerStyle={styles.footerButtonContainer}
                    onPress={() => onSubmit({email, password})}
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
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0,
        marginLeft: 0,
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    footerCheckBoxText: {
        color: 'white',
        fontSize: 12,
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

export {SignInContainer};
