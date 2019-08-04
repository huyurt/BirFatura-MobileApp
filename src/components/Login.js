import React, {Component} from 'react';
import {StyleSheet, ScrollView, View, Image, Text, ImageBackground, KeyboardAvoidingView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Input, Button, Divider, CheckBox} from 'react-native-elements';

class Login extends Component {
    render() {
        return (
            <ImageBackground source={require('../assets/images/login/bg1.jpg')} style={{width: '100%', height: '100%'}}>
                <ScrollView contentContainerStyle={{
                    flexGrow: 1
                }}>
                    <KeyboardAvoidingView style={{flex: 1}}>
                        <View style={{alignItems: 'center', justifyContent: 'center', flexGrow: 1, marginTop:10}}>
                            <Image resizeMode="contain" style={{position: 'relative'}}
                                   source={require('../assets/images/birfatura.png')}/>
                        </View>
                        <View style={{
                            marginHorizontal: 40,
                            marginTop: 40,
                            paddingHorizontal: 10,
                            paddingVertical: 15,
                            backgroundColor: 'rgba(0,0,0,0.6)',
                            borderWidth: 1,
                            borderColor: 'rgba(0,0,0,0.6)',
                            borderRadius: 7
                        }}>
                            <View style={{
                                marginBottom: 10,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{color: 'white', fontSize: 20}}>Bir Fatura'ya Hoş Geldiniz</Text>
                            </View>
                            <Divider style={{marginBottom: 10, backgroundColor: 'white'}}/>
                            <View style={{
                                height: 40,
                                marginBottom: 10,
                                paddingHorizontal: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Button
                                    title="YENİ HESAP OLUŞTUR"
                                    color="#3598DC"
                                    accessibilityLabel="YENİ HESAP OLUŞTUR"
                                    titleStyle={{fontSize: 11}}
                                />
                            </View>
                            <View style={{marginBottom: 10, paddingHorizontal: 10}}>
                                <Text style={{color: '#fff', fontSize: 13}}>Hesabınızla giriş yapabilirsiniz:</Text>
                            </View>
                            <Input
                                placeholder='E-posta adresiniz'
                                leftIcon={
                                    <Icon
                                        name='user'
                                        size={13}
                                        color='#ccc'
                                    />
                                }
                                placeholderTextColor='#ccc'
                                containerStyle={{height: 40, marginBottom: 10}}
                                inputStyle={{
                                    fontSize: 13,
                                    marginLeft: 5,
                                    paddingVertical: 0,
                                    textAlignVertical: 'center'
                                }}
                                inputContainerStyle={{
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    backgroundColor: 'white'
                                }}
                            />
                            <Input
                                placeholder='Şifreniz'
                                leftIcon={
                                    <Icon
                                        name='lock'
                                        size={13}
                                        color='#ccc'
                                    />
                                }
                                secureTextEntry
                                placeholderTextColor='#ccc'
                                containerStyle={{height: 40, marginBottom: 10}}
                                inputStyle={{
                                    fontSize: 13,
                                    marginLeft: 5,
                                    paddingVertical: 0,
                                    textAlignVertical: 'center'
                                }}
                                inputContainerStyle={{
                                    borderWidth: 1,
                                    borderRadius: 5,
                                    backgroundColor: 'white'
                                }}
                            />
                            <View style={{
                                height: 40, marginBottom: 10, paddingHorizontal: 10, flexDirection: 'row'
                            }}>
                                <View style={{flex: 1}}>
                                    <CheckBox
                                        title='Beni Hatırla'
                                        checked
                                        textStyle={{
                                            color: 'white',
                                            fontSize: 13,
                                            fontWeight: 'normal',
                                            paddingVertical: 0,
                                            textAlignVertical: 'center'
                                        }}
                                        containerStyle={{
                                            width: 115,
                                            backgroundColor: 'rgba(0,0,0,0)',
                                            borderWidth: 0,
                                            marginLeft: 0
                                        }}
                                    />
                                </View>
                                <View style={{flex: 1, alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                                    <Button
                                        title="GİRİŞ YAP"
                                        color="#3598DC"
                                        accessibilityLabel="GİRİŞ YAP"
                                        titleStyle={{fontSize: 11}}
                                    />
                                </View>
                            </View>
                            <View style={{marginBottom: 5, paddingHorizontal: 10}}>
                                <Text style={{color: 'white', fontSize: 13}}>
                                    Şifrenizi Mi Unuttunuz?
                                </Text>
                            </View>
                            <View style={{paddingHorizontal: 10}}>
                                <Text>
                                    <Text style={{color: '#3598DC', fontSize: 12}}>
                                        Buraya
                                    </Text>
                                    <Text style={{color: 'white', fontSize: 12}}>
                                        &nbsp;tıklayarak şifrenizi sıfırlamayı talep edebilirsiniz.
                                    </Text>
                                </Text>
                            </View>
                        </View>
                        <View style={{marginVertical: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Text style={{color: 'white', fontSize: 12}}>
                                2016 - 2019 © Bir Fatura
                            </Text>
                        </View>
                    </KeyboardAvoidingView>
                </ScrollView>
            </ImageBackground>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    loginButton: {
        backgroundColor: '#2980b6',
        color: '#fff'
    }

});


export default Login;
