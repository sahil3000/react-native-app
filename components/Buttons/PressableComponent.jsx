import React, { useState } from 'react'
import { Platform, Pressable, StyleSheet, Text, View } from 'react-native'

const PressableComponent = () => {
    const [eventType, setEventType] = useState("")

    const eventHandler = (text) => {
        setEventType(text);
        setTimeout(() => {
            setEventType("");
        }, 1000);
    }

    return (
        <View style={styles.container}>
            <Pressable
                onPress={() => eventHandler("onPress")}
                onLongPress={() => eventHandler("Long")}
                // onPressIn={() => eventHandler("onPressIn")}
                // onPressOut={() => eventHandler("onPressOut")}
            >
                <Text style={styles.button}>I'm pressable!</Text>
            </Pressable>
            <Text>Event Type: {eventType}</Text>
            <Text>Platform: {Platform.OS}</Text>
            <Text>Device Type:  {Platform.isPad ? 'pad' : 'mobile'}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 50,
    },
    button: {
        fontSize: 18,
        backgroundColor: 'blue',
        textAlign: 'center',
        color: '#fff',
        padding: 5,
        marginVertical: 10,
        marginHorizontal: 10,
        borderRadius: 10,
    }
})

export default PressableComponent