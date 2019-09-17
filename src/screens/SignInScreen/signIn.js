import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input} from "../../components";
import {Button, CheckBox} from "react-native-elements";

const SignInContainer = ({headerText, onSubmit}) => {
    const [eposta, setEposta] = useState('yazilim1@birfatura.com');
    const [sifre, setSifre] = useState('Bir147.');

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>
                    {headerText}
                </Text>
            </View>
            <Input
                iconName='user'
                placeHolder='E-posta adresiniz'
                autoCapitalize='none'
                autoCorrect={false}
                value={eposta}
                onChangeText={setEposta}
            />
            <Input
                password={true}
                iconName='lock'
                placeHolder='Şifreniz'
                autoCapitalize='none'
                autoCorrect={false}
                value={sifre}
                onChangeText={setSifre}
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
                    color='#3598DC'
                    accessibilityLabel='GİRİŞ YAP'
                    titleStyle={styles.footerButtonTitle}
                    containerStyle={styles.footerButtonContainer}
                    onPress={() => onSubmit({eposta, sifre})}
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
