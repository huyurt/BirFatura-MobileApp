import React from 'react';
import {StyleSheet, ViewPropTypes, KeyboardAvoidingView, ScrollView} from "react-native";
import PropTypes from 'prop-types';

const Scroll = props => {
    return (
        <ScrollView contentContainerStyle={[styles.scrollViewContentContainer, props.scrollViewContentContainerStyle]}>
            <KeyboardAvoidingView style={[styles.keyboardAvoidingView, props.keyboardAvoidingViewStyle]}>
                {props.children}
            </KeyboardAvoidingView>
        </ScrollView>
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
