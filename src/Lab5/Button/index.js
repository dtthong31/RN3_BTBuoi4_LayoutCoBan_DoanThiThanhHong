import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
export default class Button extends Component {
    render() {
        const { title, colors } = this.props;
        return (
            <LinearGradient
                style={styles.styleContainer}
                colors={colors}
                >
                <TouchableOpacity  >
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '700' }}> {title} </Text>
                </TouchableOpacity>
            </LinearGradient>

        )
    }
}

const styles = StyleSheet.create({
    styleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 40,
        borderRadius: 10,
        margin: 10,
    }
})
