import React, {useState, useEffect} from 'react';
import {StyleSheet, BackHandler, View, Text, TouchableOpacity, Dimensions, Animated, Easing} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {hideMessage as flashHideMessage, showMessage as flashShowMessage} from "react-native-flash-message";
import HTML from "react-native-render-html";
import CONSTANTS from "../../assets/constants";
import {navigate} from "../../references/navigationReference";
import {
    NameSurnameValidate, EmailValidate, PasswordValidate, CompanyNameValidate, MobilePhoneValidate, IsEmpty
} from "../../references/validator";
import {CustomInput, CustomModal} from "../../components";
import useDimensions from "../../references/useDimensions";

const SignUpContainer = ({onSubmit, onShowMessage, onHideMessage, onPressed, message}) => {
    const [nameSurname, setNameSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');

    const [invalidNameSurname, setInvalidNameSurname] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const [invalidPassword, setInvalidPassword] = useState(false);
    const [invalidCompanyName, setInvalidCompanyName] = useState(false);
    const [invalidMobilePhone, setInvalidMobilePhone] = useState(false);

    const [eyeIcon, setEyeIcon] = useState('eye');
    const [hidePassword, setHidePassword] = useState(true);
    const [modalVisible, setModalVisible] = useState(false);

    const [screenWidth, setScreenWidth] = useState(Math.max(Dimensions.get('screen').width, Dimensions.get('screen').height));
    const [xValueForm1] = useState(new Animated.Value(0));
    const [xValueForm2] = useState(new Animated.Value(screenWidth));
    const [form, setForm] = useState(1);
    const screenData = useDimensions();

    BackHandler.addEventListener('hardwareBackPress', () => {
        messageHide();
    });

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
                }));
            }
        }, [message]);
    }

    const messageHide = async () => {
        setTimeout(() => {
            flashHideMessage();
            onHideMessage();
        });
    };

    useEffect(() => {
        setScreenWidth(Math.max(screenData.width, screenData.height));
        switch (form) {
            case 1:
                moveAnimation(true);
                break;
            case 2:
                moveAnimation(false);
                break;
        }
    }, [xValueForm1, xValueForm2]);

    const moveAnimation = (back) => {
        let duration = 250;
        Animated.parallel([
            Animated.timing(xValueForm1, {
                toValue: back ? 0 : -screenWidth,
                duration: duration,
                easing: Easing.linear,
                useNativeDriver: true
            }),
            Animated.timing(xValueForm2, {
                toValue: back ? screenWidth : 0,
                duration: duration,
                easing: Easing.linear,
                useNativeDriver: true
            })
        ]).start(() => {
            setForm(back ? 1 : 2);
        });
    };

    const onModalVisible = (visible) => {
        setModalVisible(visible);
    };

    return (
        <View style={{overflow: 'hidden'}}>
            <Animated.View style={{position: 'relative', transform: [{translateX: xValueForm1}]}}>
                <CustomInput
                    iconName='user'
                    placeHolder='Adınız Soyadınız'
                    autoCapitalize='none'
                    value={nameSurname}
                    onChangeText={setNameSurname}
                    flashMessageShowed={invalidNameSurname}
                    onChange={(e) => {
                        if (invalidNameSurname && NameSurnameValidate(e.nativeEvent.text)) {
                            setInvalidNameSurname(false);
                            messageHide();
                        }
                    }}
                />
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
                    password={hidePassword}
                    iconName='lock'
                    placeHolder='Şifreniz'
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword}
                    flashMessageShowed={invalidPassword}
                    onChange={(e) => {
                        if (invalidPassword && PasswordValidate(e.nativeEvent.text)) {
                            setInvalidPassword(false);
                            messageHide();
                        }
                    }}
                    rightIcon={
                        <TouchableOpacity
                            onPress={() => {
                                if (eyeIcon === 'eye') {
                                    setHidePassword(false);
                                    setEyeIcon('eye-slash');
                                } else {
                                    setHidePassword(true);
                                    setEyeIcon('eye');
                                }
                            }}
                        >
                            <Icon
                                color='rgba(0, 0, 0, 0.4)'
                                name={eyeIcon}
                                size={13}
                            />
                        </TouchableOpacity>
                    }
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
                            navigate('SignIn')
                        }}
                    />
                    <Button
                        title='İLERİ'
                        accessibilityLabel='İLERİ'
                        titleStyle={styles.footerButtonTitleSignUp}
                        containerStyle={styles.footerButtonContainerSignUp}
                        onPress={() => {
                            let message = '';
                            let invalid = false;
                            if (!NameSurnameValidate(nameSurname)) {
                                message += CONSTANTS.INVALID_NAME_SURNAME;
                                setInvalidNameSurname(true);
                                invalid = true;
                            }
                            if (!EmailValidate(email)) {
                                message += (!IsEmpty(message) ? '\n' : '') + CONSTANTS.INVALID_EMAIL;
                                setInvalidEmail(true);
                                invalid = true;
                            }
                            if (!PasswordValidate(password)) {
                                message += (!IsEmpty(message) ? '\n' : '') + CONSTANTS.INVALID_PASSWORD;
                                setInvalidPassword(true);
                                invalid = true;
                            }

                            if (invalid) {
                                onShowMessage({message});
                            } else {
                                messageHide();
                                moveAnimation(false);
                            }
                        }}
                    />
                </View>
            </Animated.View>
            <Animated.View style={{position: 'absolute', width: '100%', transform: [{translateX: xValueForm2}]}}>
                <CustomInput
                    iconName='building'
                    placeHolder='Firmanızın Adı'
                    autoCapitalize='none'
                    value={companyName}
                    onChangeText={setCompanyName}
                    flashMessageShowed={invalidCompanyName}
                    onChange={(e) => {
                        if (invalidCompanyName && CompanyNameValidate(e.nativeEvent.text)) {
                            setInvalidCompanyName(false);
                            messageHide();
                        }
                    }}
                />
                <CustomInput
                    iconName='phone'
                    placeHolder='Cep Telefonu Numaranız'
                    autoCapitalize='none'
                    keyboardType='phone-pad'
                    value={mobilePhone}
                    maxLength={10}
                    onChangeText={setMobilePhone}
                    flashMessageShowed={invalidMobilePhone}
                    onChange={(e) => {
                        if (invalidMobilePhone && MobilePhoneValidate(e.nativeEvent.text)) {
                            setInvalidMobilePhone(false);
                            messageHide();
                        }
                    }}
                />
                <View style={[styles.footerContainer, {alignItems: 'center'}]}>
                    <Text>
                        <Text style={styles.mainText}>
                            Bir Fatura'ya üye olarak&nbsp;
                        </Text>
                        <Text style={styles.mainLinkText}
                              onPress={() => onModalVisible(true)}
                        >
                            kullanım koşullarını
                        </Text>
                        <Text style={styles.mainText}>
                            &nbsp;kabul etmiş sayılırsınız.
                        </Text>
                    </Text>
                </View>
                <View style={styles.footerContainer}>
                    <Button
                        title='< GERİ'
                        buttonStyle={{backgroundColor: 'rgba(0, 0, 0, 0.1)'}}
                        accessibilityLabel='< GERİ'
                        titleStyle={styles.footerButtonTitleBack}
                        containerStyle={styles.footerButtonContainerBack}
                        onPress={() => {
                            messageHide();
                            moveAnimation(true);
                        }}
                    />
                    <Button
                        title='ÜYE OL'
                        accessibilityLabel='ÜYE OL'
                        titleStyle={styles.footerButtonTitleSignUp}
                        containerStyle={styles.footerButtonContainerSignUp}
                        loading={onPressed}
                        disabled={onPressed}
                        disabledStyle={styles.footerButtonDisabledContainer}
                        onPress={() => {
                            let message = '';
                            let invalid = false;
                            if (!CompanyNameValidate(companyName)) {
                                message += CONSTANTS.INVALID_COMPANY_NAME;
                                setInvalidCompanyName(true);
                                invalid = true;
                            }
                            if (!MobilePhoneValidate(mobilePhone)) {
                                message += (!IsEmpty(message) ? '\n' : '') + CONSTANTS.INVALID_MOBILE_PHONE;
                                setInvalidMobilePhone(true);
                                invalid = true;
                            }

                            if (invalid) {
                                onShowMessage({message});
                            } else {
                                messageHide();
                                onSubmit({nameSurname, email, password, companyName, mobilePhone})
                            }
                        }}
                    />
                </View>
            </Animated.View>
            <CustomModal
                content={<HTML html={CONSTANTS.USER_AGGREMENT}/>}
                modalVisible={modalVisible}
                onModalVisible={onModalVisible}
            />
        </View>
    );
};

SignUpContainer.propTypes = {
    onSubmit: PropTypes.func,
    onShowMessage: PropTypes.func,
    hideMessage: PropTypes.func,
    onPressed: PropTypes.bool,
    showMessage: PropTypes.bool,
    message: PropTypes.string
};

const styles = StyleSheet.create({
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
    footerButtonContainerSignUp: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    footerButtonTitleBack: {
        color: '#3598DC',
        fontSize: 11
    },
    footerButtonTitleSignUp: {
        fontSize: 11
    },
    mainLinkText: {
        color: '#3598DC',
        fontSize: 12
    },
    mainText: {
        color: 'white',
        fontSize: 12
    },
    footerButtonDisabledContainer: {
        backgroundColor: '#5EB7FF',
    }
});

export {SignUpContainer};
