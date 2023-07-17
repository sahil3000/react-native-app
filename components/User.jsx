import React, { useState } from 'react'
import { Button, StyleSheet, Text, TextInput, View } from 'react-native'

const User = () => {
    const [name, setName] = useState("");
    return (
        <View>
            <Text style={styles.heading} >User Form</Text>
            <Text style={name ? styles.label: [styles.label,styles.error]} >Name : {name ? name : 'No name entered'}</Text>
            <TextInput
                style={styles.input}
                placeholder='Enter Name'
                value={name}
                onChangeText={text => setName(text)}
            />
            <Button
                title='Clear Name'
                onPress={() => setName("")}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        fontSize: 16,
        borderWidth: 2,
        padding: 5,
        marginBottom: 5
    },
    heading: {
        fontSize: 30,
        fontWeight: 700
    },
    label: {
        fontSize: 18,
    },
    error: {
        color: 'red'
    }
});

export default User