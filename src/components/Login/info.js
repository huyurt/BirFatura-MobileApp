import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CONSTANTS from '../../assets/constants';

class Info extends Component {
    state = {loginInfoText: '© Bir Fatura'};

    componentDidMount() {
        const currentYear = new Date().getFullYear();
        if (currentYear > CONSTANTS.BIR_FATURA_KURULUS_YILI) {
            this.setState({loginInfoText: `${CONSTANTS.BIR_FATURA_KURULUS_YILI} - ${currentYear} ${this.state.loginInfoText}`});
        } else {
            this.setState({loginInfoText: `${CONSTANTS.BIR_FATURA_KURULUS_YILI} ${this.state.loginInfoText}`});
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>
                    {this.state.loginInfoText}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginVertical: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        color: 'white',
        fontSize: 12
    }
});

export {Info};
