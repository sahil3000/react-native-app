import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

const USERS = [
    { id: 1, name: 'test1' },
    { id: 2, name: 'test2' },
    { id: 3, name: 'test3' },
    { id: 4, name: 'test4' },
    { id: 5, name: 'test5' },
    { id: 6, name: 'test6' },
    { id: 7, name: 'test7' },
    { id: 8, name: 'test8' },
    { id: 9, name: 'test9' },
    { id: 10, name: 'test10' },
    { id: 11, name: 'test11' },
    { id: 12, name: 'test12' },
    { id: 13, name: 'test13' },
    { id: 14, name: 'test14' },
    { id: 15, name: 'test15' },
]

const UsingFlatList = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.heading} >Listing</Text>
            <FlatList
                data={USERS}
                renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
                keyExtractor={(item) => item.id}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 150,
    },
    heading: {
        fontSize: 36,
        fontWeight: 700
    },
    item: {
        fontSize: 24,
        padding: 10,
        color: '#fff',
        backgroundColor: '#123245',
        marginBottom: 10
    }
});

export default UsingFlatList