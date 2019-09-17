import React from 'react';
import {StyleSheet, ViewPropTypes, KeyboardAvoidingView, ScrollView} from "react-native";
import PropTypes from 'prop-types';

const Scroll = props => {
    return (
        <KeyboardAvoidingView
            style={[styles.keyboardAvoidingView, props.keyboardAvoidingViewStyle]}
            behavior='padding'
            keyboardVerticalOffset={1}
        >
            <ScrollView
                contentContainerStyle={[styles.scrollViewContentContainer, props.scrollViewContentContainerStyle]}>
                {props.children}
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

const styles = StyleSheet.create({
    scrollViewContentContainer: {
        flexGrow: 1
    },
    keyboardAvoidingView: {
        flex: 1
    }
});

Scroll.propTypes = {
    children: PropTypes.node.isRequired,
    scrollViewContentContainerStyle: ViewPropTypes.style,
    keyboardAvoidingViewStyle: ViewPropTypes.style
};

export {Scroll};
