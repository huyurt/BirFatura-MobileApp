import React from 'react';
import {StyleSheet, Image, View} from "react-native";

const Logo = props => {
    return (
        <View style={styles.container}>
            <Image resizeMode="contain" style={styles.image}
                   source={require('../../assets/images/birfatura.png')}/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'flex-start',
        flexGrow: 1,
        marginTop: 100
    },
    image: {
        height: 50,
        position: 'relative'
    }
});

export {Logo};
