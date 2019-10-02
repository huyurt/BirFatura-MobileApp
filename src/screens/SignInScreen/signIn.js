import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {CustomInput} from "../../components";
import {Button, CheckBox} from "react-native-elements";
import {EmailValidate, IsEmpty, NameSurnameValidate, PasswordValidate} from "../../references/validator";
import CONSTANTS from "../../assets/constants";
import {showMessage as flashShowMessage} from "react-native-flash-message";

const SignInContainer = ({headerText, onSubmit, messageHide, onShowMessage, onHideMessage, onPressed, message}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [checked, setChecked] = useState(true);

    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);

    flashMessageController();

    function flashMessageController() {
        useEffect(() => {
            if (message !== '') {
                setTimeout(() => flashShowMessage({
                    message: message,
                    position: 'bottom',
                    autoHide: false,
                    animated: true,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    color: 'white',
                    onPress: () => {
                        messageHide();
                    }
                }), 100);
            }
        }, [message]);
    }

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    {headerText}
                </Text>
            </View>
            <CustomInput
                iconName='envelope'
                placeHolder='E-posta Adresiniz'
                autoCapitalize='none'
                keyboardType='email-address'
                value={email}
                onChangeText={setEmail}
                flashMessageShowed={invalidEmail}
                onChange={(e) => {
                    if (invalidEmail && EmailValidate(e.nativeEvent.text)) {
                        setInvalidEmail(false);
                        messageHide();
                    }
                }}
            />
            <CustomInput
                password={true}
                iconName='lock'
                placeHolder='Şifreniz'
                autoCapitalize='none'
                value={password}
                onChangeText={setPassword}
                flashMessageShowed={invalidPassword}
                onChange={(e) => {
                    if (invalidPassword && !IsEmpty(e.nativeEvent.text)) {
                        setInvalidPassword(false);
                        messageHide();
                    }
                }}
            />
            <View style={styles.footerContainer}>
                <CheckBox
                    title='Beni Hatırla'
                    textStyle={styles.footerCheckBoxText}
                    containerStyle={styles.footerCheckBoxContainer}
                    checked={checked}
                    onPress={() => setChecked(!checked)}
                />
                <Button
                    title='GİRİŞ YAP'
                    accessibilityLabel='GİRİŞ YAP'
                    titleStyle={styles.footerButtonTitle}
                    containerStyle={styles.footerButtonContainer}
                    loading={onPressed}
                    disabled={onPressed}
                    disabledStyle={styles.footerButtonDisabledContainer}
                    onPress={() => {
                        let message = '';
                        let invalid = false;
                        if (!EmailValidate(email)) {
                            message = CONSTANTS.INVALID_EMAIL;
                            setInvalidEmail(true);
                            invalid = true;
                        }
                        if (IsEmpty(password)) {
                            message = CONSTANTS.INVALID_EMAIL_OR_PASSWORD;
                            setInvalidPassword(true);
                            invalid = true;
                        }

                        if (invalid) {
                            onShowMessage({message});
                        } else {
                            messageHide();
                            onSubmit({email, password});
                        }
                    }}
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
    footerButtonDisabledContainer: {
        backgroundColor: '#5EB7FF',
    },
    footerButtonTitle: {
        fontSize: 11
    }
});

export {SignInContainer};
