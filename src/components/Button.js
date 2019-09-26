import React, {useState} from 'react';
import {StyleSheet, ViewPropTypes} from 'react-native';
import PropTypes from 'prop-types';
import {Button} from "react-native-elements";

const MyButton = props => {
    const [onPressed, setOnPressed] = useState(false);

    return (
        <Button
            title={props.title}
            accessibilityLabel={props.title}
            titleStyle={styles.footerButtonTitle}
            containerStyle={styles.footerButtonContainer}
            loading={onPressed}
            disabled={onPressed}
            disabledStyle={styles.footerButtonDisabledContainer}
            onPress={() => {
                setOnPressed(true);
                props.onPress();
            }}
        />
    );
};

const styles = StyleSheet.create({
    buttonTitle: {
        fontSize: 11
    },
    buttonContainer: {
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    buttonDisabledContainer: {
        backgroundColor: '#5EB7FF',
    }
});

MyButton.propTypes = {
    title: PropTypes.string.required,
    onPress: PropTypes.func,
};

export default MyButton;
