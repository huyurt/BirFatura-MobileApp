import React from 'react';
import {StyleSheet, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {Input} from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";

const MyInput = props => {
    return (
        <Input
            leftIcon={
                <Icon
                    name={props.iconName}
                    size={props.iconSize}
                    color={props.placeHolderTextColor}
                />
            }
            leftIconContainerStyle={{minWidth: 20, alignItems: 'center'}}
            autoCapitalize={props.autoCapitalize}
            autoCorrect={props.autoCorrect}
            keyboardType={props.keyboardType}
            secureTextEntry={props.password}
            placeholder={props.placeHolder}
            placeholderTextColor={props.placeHolderTextColor}
            containerStyle={[styles.container, props.containerStyle]}
            inputStyle={[styles.input, props.inputStyle]}
            inputContainerStyle={[styles.inputContainer, props.inputContainerStyle]}
            onChangeText={props.onChangeText}
            value={props.value}
            rightIcon={props.rightIcon}
            rightIconContainerStyle={[{marginRight: 10}, props.rightIconContainerStyle]}
        />
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginBottom: 10
    },
    inputContainer: {
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: 'white'
    },
    input: {
        fontSize: 13,
        marginLeft: 5,
        paddingVertical: 0,
        textAlignVertical: 'center'
    }
});

MyInput.propTypes = {
    autoCapitalize: PropTypes.string,
    autoCorrect: PropTypes.bool,
    keyboardType: PropTypes.string,
    password: PropTypes.bool,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number,
    placeHolder: PropTypes.string.isRequired,
    placeHolderTextColor: PropTypes.string,
    containerStyle: ViewPropTypes.style,
    inputStyle: ViewPropTypes.style,
    inputContainerStyle: ViewPropTypes.style,
    onChangeText: PropTypes.func,
    value: PropTypes.string,
    rightIcon: PropTypes.node,
    rightIconContainerStyle: ViewPropTypes.style
};

MyInput.defaultProps = {
    autoCapitalize: 'sentences',
    autoCorrect: false,
    password: false,
    placeHolderTextColor: '#ccc',
    iconSize: 13
};

export default MyInput;
