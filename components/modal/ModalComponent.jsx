import React, { useState } from 'react'
import { Button, Modal, StyleSheet, Text, View } from 'react-native'

const ModalComponent = () => {
    const [openModal, setOpenModal] = useState(false);
    return (
        <View style={styles.container}>
            <Modal animationType='slide' visible={openModal} >
                <View style={styles.modalWrapper}>
                    <View style={styles.modalRow}>
                        <Text style={styles.modalContent}>code text</Text>
                        <Button
                            title="Close Modal"
                            onPress={() => setOpenModal(false)}
                        />
                    </View>
                </View>
            </Modal>
            <View style={styles.button}>
                <Button
                    title="Open Modal"
                    onPress={() => setOpenModal(true)}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 50,
        // marginLeft: 10,
        // marginRight: 10,
    },
    button: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modalWrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalRow: {
        backgroundColor: '#fff',
        padding: 50,
        shadowColor: '#000',
        elevation: 5
    },
    modalContent: {
        fontSize: 24,
        textAlign: 'center'
    }
});

export default ModalComponent