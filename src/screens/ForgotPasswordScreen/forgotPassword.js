import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from "react-native-elements";
import {navigate} from "../../references/navigationReference";
import {CustomInput} from "../../components";

const ForgotPasswordContainer = ({headerText, onSubmit}) => {
    const [email, setEmail] = useState('');

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
                    title='ŞİFREMİ HATIRLAT'
                    accessibilityLabel='ÜYE OL'
                    titleStyle={styles.footerButtonTitleSignUp}
                    containerStyle={styles.footerButtonContainerSignUp}
                    onPress={() => onSubmit({email})}
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
    }
});

export {ForgotPasswordContainer};
