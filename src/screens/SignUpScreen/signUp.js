import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Dimensions, Animated, Easing} from 'react-native';
import {Button} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {navigate} from "../../references/navigationReference";
import {CustomInput} from "../../components";
import useDimensions from "../../references/useDimensions";

const SignUpContainer = ({onSubmit}) => {
    const [nameSurname, setNameSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [mobilePhone, setMobilePhone] = useState('');

    const [eyeIcon, setEyeIcon] = useState('eye');
    const [hidePassword, setHidePassword] = useState(true);

    const [screenWidth, setScreenWidth] = useState(Math.max(Dimensions.get('screen').width, Dimensions.get('screen').height));
    const [xValueForm1] = useState(new Animated.Value(0));
    const [xValueForm2] = useState(new Animated.Value(screenWidth));
    const [form, setForm] = useState(1);
    const screenData = useDimensions();

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
    });

    const moveAnimation = (back) => {
        let duration = 250;
        Animated.parallel([
            Animated.timing(xValueForm1, {
                toValue: back ? 0 : -screenWidth,
                duration: duration,
                easing: Easing.linear
            }),
            Animated.timing(xValueForm2, {
                toValue: back ? screenWidth : 0,
                duration: duration,
                easing: Easing.linear
            })
        ]).start(() => {
            setForm(back ? 1 : 2);
        });
    };

    return (
        <View style={{overflow: 'hidden'}}>
            <Animated.View style={{position: 'relative', left: xValueForm1}}>
                <CustomInput
                    iconName='user'
                    placeHolder='Adınız Soyadınız'
                    autoCapitalize='none'
                    value={nameSurname}
                    onChangeText={setNameSurname}
                />
                <CustomInput
                    iconName='envelope'
                    placeHolder='E-posta Adresiniz'
                    autoCapitalize='none'
                    keyboardType='email-address'
                    value={email}
                    onChangeText={setEmail}
                />
                <CustomInput
                    password={hidePassword}
                    iconName='lock'
                    placeHolder='Şifreniz'
                    autoCapitalize='none'
                    value={password}
                    onChangeText={setPassword}
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
                        onPress={() => navigate('SignIn')}
                    />
                    <Button
                        title='İLERİ'
                        accessibilityLabel='İLERİ'
                        titleStyle={styles.footerButtonTitleSignUp}
                        containerStyle={styles.footerButtonContainerSignUp}
                        onPress={() => moveAnimation(false)}
                    />
                </View>
            </Animated.View>
            <Animated.View style={{position: 'absolute', width: '100%', left: xValueForm2}}>
                <CustomInput
                    iconName='building'
                    placeHolder='Firmanızın Adı'
                    autoCapitalize='none'
                    value={companyName}
                    onChangeText={setCompanyName}
                />
                <CustomInput
                    iconName='phone'
                    placeHolder='Cep Telefonu Numaranız'
                    autoCapitalize='none'
                    keyboardType='phone-pad'
                    value={mobilePhone}
                    onChangeText={setMobilePhone}
                />
                <View style={[styles.footerContainer]}>
                    <Text>
                        <Text style={styles.mainText}>
                            Bir Fatura'ya üye olarak&nbsp;
                        </Text>
                        <Text style={styles.mainLinkText}
                            //onPress={() => navigate('ForgotPassword')}
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
                        onPress={() => moveAnimation(true)}
                    />
                    <Button
                        title='ÜYE OL'
                        accessibilityLabel='ÜYE OL'
                        titleStyle={styles.footerButtonTitleSignUp}
                        containerStyle={styles.footerButtonContainerSignUp}
                        onPress={() => onSubmit({nameSurname, email, password, companyName, mobilePhone})}
                    />
                </View>
            </Animated.View>
        </View>
    );
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
    }
});

export {SignUpContainer};
