import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';

export default class BackgoundView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <StatusBar/>
                <View style={StyleSheet.absoluteFill}>
                    <View style={styles.header} />
                    <View style={styles.content}>
                        <View style={styles.insideContent} />
                    </View>
                </View>
                <SafeAreaView/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: '#000',
        borderBottomLeftRadius: 100,
    },
    content: {
        flex: 2,
        backgroundColor: '#000'
    },
    insideContent: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 80,
    }
})
