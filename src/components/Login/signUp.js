import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "react-native-elements";

const SignUp = props => {
    return (
        <View style={styles.container}>
            <Button
                title={props.buttonTitle}
                accessibilityLabel={props.buttonAccessibilityLabel}
                color={props.buttonColor}
                titleStyle={styles.buttonTitle}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 40,
        marginBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonTitle: {
        fontSize: 11
    }
});

SignUp.propTypes = {
    buttonTitle: PropTypes.string,
    buttonAccessibilityLabel: PropTypes.string,
    buttonColor: PropTypes.string,
};

SignUp.defaultProps = {
    buttonTitle: 'YENİ HESAP OLUŞTUR',
    buttonAccessibilityLabel: 'YENİ HESAP OLUŞTUR',
    buttonColor: '#3598DC'
};

export {SignUp};
