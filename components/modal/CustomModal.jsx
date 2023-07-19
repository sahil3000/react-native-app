import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const CustomModal = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    return (
        <View style={styles.container}>
            {isModalOpen && <View style={styles.modal}>
                <View style={styles.modalBody}>
                    <Text style={styles.modalBodyText}>Text Here</Text>
                    <Button title='Close Modal' onPress={() => setIsModalOpen(false)} />
                </View>
            </View>}
            <Button
                title='Open Modal'
                onPress={() => setIsModalOpen(true)}
                disabled={isModalOpen}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-end'
    },
    modal: {
        flex: 1,
        backgroundColor: 'rgba(50, 50, 50, .5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalBody: {
        width: 300,
        backgroundColor: '#fff',
        padding: 10,
        shadowColor: '#fff',
        elevation: 5,
        borderRadius: 10
    },
    modalBodyText: {
        fontSize: 24,
        textAlign: 'center'
    }
});

export default CustomModal