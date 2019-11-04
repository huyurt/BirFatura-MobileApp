import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = ({title}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.baslik}>
                {title}
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

export {Header};
