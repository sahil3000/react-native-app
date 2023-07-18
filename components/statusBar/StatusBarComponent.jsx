import React from 'react'
import { StatusBar, StyleSheet, Text, View } from 'react-native'

const StatusBarComponent = () => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="red"
                // barStyle="light-content"
                hidden={true}
                animated={true}
            />
            <Text>StatusBarComponent</Text>
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

});

export default StatusBarComponent