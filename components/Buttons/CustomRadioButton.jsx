import React, { useState } from 'react'
import { StyleSheet, Text, TouchableHighlight, TouchableOpacity, View } from 'react-native';

const CustomRadioButton = () => {
    const [radioValue, setRadioValue] = useState(1)
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Custom Radio Button</Text>
            <TouchableOpacity onPress={() => setRadioValue(1)}>
                <View style={styles.radioWrapper} >
                    <View style={[styles.radio]}>
                        {radioValue === 1 && <View style={styles.radioBg}></View>}
                    </View>
                    <Text>Radio1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRadioValue(2)}>
                <View style={styles.radioWrapper}>
                    <View style={styles.radio}>
                        {radioValue === 2 && <View style={styles.radioBg}></View>}
                    </View>
                    <Text>Radio2</Text>
                </View>
            </TouchableOpacity>
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
    radioWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    radio: {
        height: 30,
        width: 30,
        borderRadius: 15,
        borderColor: '#000',
        borderWidth: 2,
        marginRight: 10
    },
    radioBg: {
        backgroundColor: '#000',
        width: 20,
        height: 20,
        borderRadius: 10,
        margin: 3
    }
});


export default CustomRadioButton;