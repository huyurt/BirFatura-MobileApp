import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "react-native-elements";
import {navigate} from "../../../utilities/navigationReference";
import {EmailValidate} from "../../../utilities/validator";
import {CustomInput} from "../../../components";
import CONSTANTS from "../../../assets/constants";

const ForgotPasswordContainer = ({headerText, onSubmit, onPressed, onShowMessage, messageHide}) => {
    const [email, setEmail] = useState('');
    const [invalidEmail, setInvalidEmail] = useState(false);

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
                        if (!EmailValidate(email)) {
                            let message = CONSTANTS.INVALID_EMAIL;
                            setInvalidEmail(true);
                            onShowMessage({message});
                        } else {
                            messageHide();
                            onSubmit({email});
                        }
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
    isErrorMessage: PropTypes.bool,
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
    footerButtonDisabledContainer: {
        backgroundColor: '#5EB7FF',
    },
    footerButtonTitle: {
        fontSize: 11
    }
});

export {ForgotPasswordContainer};
