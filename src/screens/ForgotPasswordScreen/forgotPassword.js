import React, {useEffect, useState} from 'react';
import {StyleSheet, BackHandler, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "react-native-elements";
import {hideMessage as flashHideMessage, showMessage as flashShowMessage} from "react-native-flash-message";
import {navigate} from "../../references/navigationReference";
import {EmailValidate} from "../../references/validator";
import {CustomInput} from "../../components";

const ForgotPasswordContainer = ({headerText, onSubmit, hideMessage, onPressed, showMessage, message, isErrorMessage}) => {
    const [messageShowed, setMessageShowed] = useState(false);
    const [email, setEmail] = useState('');

    BackHandler.addEventListener('hardwareBackPress', () => {
        messageHide();
    });

    useEffect(() => {
        if (showMessage && !messageShowed) {
            setMessageShowed(true);
            flashShowMessage({
                message: message,
                position: 'bottom',
                autoHide: false,
                hideOnPress: true,
                animated: true,
                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                color: 'white',
                onPress: () => {
                    messageHide(true);
                }
            });
        }
    });

    const messageHide = (work = false) => {
        if (messageShowed || work) {
            setMessageShowed(false);
            hideMessage();
            flashHideMessage();
        }
    };

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
                flashMessageShowed={messageShowed && isErrorMessage}
                onChange={() => {
                    if (EmailValidate(email)) {
                        messageHide();
                    }
                }}
            />
            <View style={styles.footerContainer}>
                <Button
                    title='< GERİ'
                    buttonStyle={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
                    accessibilityLabel='< GERİ'
                    titleStyle={styles.footerButtonTitleBack}
                    containerStyle={styles.footerButtonContainerBack}
                    onPress={() => {
                        messageHide();
                        navigate('SignIn');
                    }}
                />
                <Button
                    title='ŞİFREMİ HATIRLAT'
                    accessibilityLabel='ÜYE OL'
                    titleStyle={styles.footerButtonTitle}
                    containerStyle={styles.footerButtonContainer}
                    loading={onPressed}
                    disabled={onPressed}
                    disabledStyle={styles.footerButtonDisabledContainer}
                    onPress={() => {
                        messageHide();
                        onSubmit({email});
                    }}
                />
            </View>
        </View>
    );
};

ForgotPasswordContainer.propTypes = {
    headerText: PropTypes.string,
    onSubmit: PropTypes.func,
    hideMessage: PropTypes.func,
    onPressed: PropTypes.bool,
    showMessage: PropTypes.bool,
    message: PropTypes.string,
    isErrorMessage: PropTypes.bool
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
    footerButtonContainerBack: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'center'
    },
    footerButtonTitleBack: {
        color: '#3598DC',
        fontSize: 11
    },
    footerButtonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    footerButtonTitle: {
        fontSize: 11
    },
    footerButtonDisabledContainer: {
        backgroundColor: '#5EB7FF',
    }
});

export {ForgotPasswordContainer};
