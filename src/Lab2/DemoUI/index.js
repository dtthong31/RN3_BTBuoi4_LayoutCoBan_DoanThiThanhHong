import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class DemoUi extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={[styles.styleBox, styles.containerTop]}>
                    <View style={[styles.topItem]} />
                    <View style={[styles.topItem]} />
                </View>
                <View style={[styles.styleBox, styles.containerBottom]}>
                    <View style={styles.botItem}>
                        <View style={styles.botItemInner}></View>
                        <View style={styles.botItemInner}></View>
                    </View>
                    <View style={styles.botItem}>
                        <View style={styles.botItemInner}></View>
                        <View style={styles.botItemInner}></View>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    styleBox: {
        flex: 1,
    },
    containerTop: {
        flex: 1,
        backgroundColor: '#96CC96',
        borderRadius: 20,
        justifyContent: 'space-around',
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    
    topItem: {
        flex: 1,
        marginBottom: 10,
        borderRadius: 10,
        backgroundColor: '#F4B940',

    },
    containerBottom: {
        flex: 1,
        backgroundColor: '#3D85C6',
        borderRadius: 20,
    },
    botItem: {
        flex: 1,
        flexDirection: 'row',
    },
    botItemInner: {
        flex: 1,
        borderRadius: 10,
        marginVertical: 20,
        marginHorizontal: 30,
        backgroundColor: '#C9C9Ff',
    },

})
