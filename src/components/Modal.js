import React from 'react';
import {StyleSheet, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import PropTypes from 'prop-types';
import Icon from "react-native-vector-icons/FontAwesome";
import Modal from "react-native-modal";

const MyModal = ({content, modalVisible, onModalVisible}) => {
    return (
        <View>
            <Modal
                isVisible={modalVisible}
                onBackdropPress={() => onModalVisible(false)}
            >
                <View style={styles.container}>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={() => onModalVisible(false)}
                    >
                        <Text>
                            Kapat&nbsp;
                            <Icon
                                name='close'
                                size={15}
                                color='black'
                            />
                        </Text>
                    </TouchableOpacity>
                    <ScrollView>
                        <View style={styles.content}>
                            {content}
                        </View>
                    </ScrollView>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    closeButton: {
        margin: 10,
        alignItems: 'flex-end',
        justifyContent: 'center'
    },
    content: {
        paddingHorizontal: 20
    }
});

MyModal.propTypes = {
    modalVisible: PropTypes.bool.isRequired,
    content: PropTypes.node.isRequired,
    onModalVisible: PropTypes.func.isRequired
};

export default MyModal;
