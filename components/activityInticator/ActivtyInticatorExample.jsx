import React, { useState } from 'react'
import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'

const ActivtyInticatorExample = () => {
    const [showLoader, setShowLoader] = useState(false);

    const loaderHandler = () => {
        setShowLoader(true);
        setTimeout(() => setShowLoader(false), 3000)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Activty Indicator Example</Text>
            <ActivityIndicator size={"large"} animating={showLoader} />
            {/* size numbering value works only in andriod device */}
            {showLoader && <ActivityIndicator size={100}  />}
            <Button title='Show Loader' onPress={loaderHandler} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 50,
        marginLeft: 5,
        marginRight: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    heading: {
        fontSize: 24,
        fontWeight: 700,
        marginBottom: 10
    },
});

export default ActivtyInticatorExample;