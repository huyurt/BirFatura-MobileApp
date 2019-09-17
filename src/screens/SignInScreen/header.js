import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const Header = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.baslik}>
                {props.baslik}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    baslik: {
        color: 'white',
        fontSize: 20
    }
});

Header.propTypes = {
    baslik: PropTypes.string.isRequired
};

Header.defaultProps = {
    baslik: 'Bir Fatura\'ya Hoş Geldiniz'
};

export {Header};
