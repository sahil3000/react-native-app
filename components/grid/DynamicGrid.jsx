import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
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
    { id: 16, name: 'test16' },
    { id: 17, name: 'test17' },
    { id: 18, name: 'test18' },
    { id: 19, name: 'test19' },
    { id: 20, name: 'test20' },
    { id: 21, name: 'test21' },
    { id: 22, name: 'test22' },
    { id: 23, name: 'test23' },
]

const DynamicGrid = () => {
    return (
        <View style={styles.container} >
            <Text style={styles.heading}>Dynamic Grid</Text>
            <ScrollView>
                <View style={styles.flex}>
                    {USERS.map(ele => {
                        return <Text key={ele.id} style={styles.card}>{ele.name}</Text>
                    })}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 100
    },
    heading: {
        fontSize: 24,
        fontWeight: 700
    },
    flex: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        backgroundColor: 'green',
        color: '#fff',
        fontSize: 24,
        padding: 10,
        margin: 10,
        width: 100,
        height: 100,
        textAlignVertical: 'center',
        textAlign: 'center',
    }
});

export default DynamicGrid