import React, { useState } from 'react'
import { Button, StyleSheet, View } from 'react-native';
import { Text, TextInput } from 'react-native'

const InputForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showDetail, setShowDetail] = useState(false);

    const resetFormHandler = () => {
        setEmail("");
        setName("");
        setPassword("");
        setShowDetail(false);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>User Form</Text>
            <TextInput
                placeholder='Name'
                value={name}
                style={styles.input}
                onChangeText={(text) => setName(text)}
            />

            <TextInput
                placeholder='Password'
                secureTextEntry={true}
                value={password}
                style={styles.input}
                onChangeText={(text) => setPassword(text)}
            />

            <TextInput
                placeholder='Email'
                value={email}
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
            />

            <Button
                title='Print user data'
                color={"green"}
                onPress={() => setShowDetail(true)}
                style={styles.button}
            />

            <Button
                title='Reset'
                color={"red"}
                onPress={resetFormHandler}
            />

            {showDetail && <View>
                <Text>Name: {name}</Text>
                <Text>Email: {email}</Text>
                <Text>Password: {password}</Text>
            </View>}

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        fontSize: 16,
        borderWidth: 2,
        padding: 5,
        marginBottom: 5,
    },
    heading: {
        fontSize: 30,
        fontWeight: 700
    },
    button: {
        margin: 10
    }
});

export default InputForm