import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {navigate} from "../../references/navigationReference";

const ForgotPass = ({headerText, mainLinkText, mainText}) => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    {headerText}
                </Text>
            </View>
            <View style={styles.mainContainer}>
                <Text>
                    <Text style={styles.mainLinkText}
                          onPress={() => navigate('ForgotPassword')}
                    >
                        {mainLinkText}
                    </Text>
                    <Text style={styles.mainText}>
                        {mainText}
                    </Text>
                </Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        marginBottom: 5,
        paddingHorizontal: 10
    },
    headerText: {
        color: 'white',
        fontSize: 13
    },
    mainContainer: {
        paddingHorizontal: 10
    },
    mainLinkText: {
        color: '#3598DC',
        fontSize: 12
    },
    mainText: {
        color: 'white',
        fontSize: 12
    }
});

export {ForgotPass};
