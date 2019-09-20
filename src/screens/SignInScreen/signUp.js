import React from 'react';
import {StyleSheet, View} from 'react-native';
import PropTypes from 'prop-types';
import {navigate} from "../../references/navigationReference";
import {Button} from "react-native-elements";

const SignUpContainer = props => {
    return (
        <View style={styles.container}>
            <Button
                title={props.buttonTitle}
                accessibilityLabel={props.buttonAccessibilityLabel}
                color={props.buttonColor}
                titleStyle={styles.buttonTitle}
                onPress={() => {
                    navigate('SignUp');
                }}
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

SignUpContainer.propTypes = {
    buttonTitle: PropTypes.string,
    buttonAccessibilityLabel: PropTypes.string,
    buttonColor: PropTypes.string,
};

SignUpContainer.defaultProps = {
    buttonTitle: 'YENİ HESAP OLUŞTUR',
    buttonAccessibilityLabel: 'YENİ HESAP OLUŞTUR',
    buttonColor: '#3598DC'
};

export {SignUpContainer};
