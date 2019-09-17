import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const ForgotPass = props => {
    return (
        <View>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}>
                    {props.headerText}
                </Text>
            </View>
            <View style={styles.mainContainer}>
                <Text>
                    <Text style={styles.mainLinkText}>
                        {props.mainLinkText}
                    </Text>
                    <Text style={styles.mainText}>
                        {props.mainText}
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

ForgotPass.propTypes = {
    headerText: PropTypes.string,
    mainLinkText: PropTypes.string,
    mainText: PropTypes.string
};

ForgotPass.defaultProps = {
    headerText: 'Şifrenizi Mi Unuttunuz?',
    mainLinkText: 'Buraya',
    mainText: ' tıklayarak şifrenizi sıfırlamayı talep edebilirsiniz.'
};

export {ForgotPass};
