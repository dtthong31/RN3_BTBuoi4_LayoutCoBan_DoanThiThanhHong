import React, { Component } from 'react'
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native'

export default class TextInput extends Component {
    render() {
        return (
            <RNTextInput
                placeholder={this.props.placeholder}
                placeholderTextColor='#rgba(255,255,255, 0.5)'
                style={styles.styleTextInput}
            />
        )
    }
}

const styles = StyleSheet.create({
    styleTextInput: {
        backgroundColor: '#19191f',
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 8,
        color: '#fff',
        marginBottom: 20,
    }
})
