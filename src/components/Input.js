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
            secureTextEntry={props.password}
            placeholder={props.placeHolder}
            placeholderTextColor={props.placeHolderTextColor}
            containerStyle={[styles.container, props.containerStyle]}
            inputStyle={[styles.input, props.inputStyle]}
            inputContainerStyle={[styles.inputContainer, props.inputContainerStyle]}
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
    password: PropTypes.bool,
    iconName: PropTypes.string.isRequired,
    iconSize: PropTypes.number,
    placeHolder: PropTypes.string.isRequired,
    placeHolderTextColor: PropTypes.string,
    containerStyle: ViewPropTypes.style,
    inputStyle: ViewPropTypes.style,
    inputContainerStyle: ViewPropTypes.style
};

MyInput.defaultProps = {
    password: false,
    placeHolderTextColor: '#ccc',
    iconSize: 13
};

export default MyInput;
