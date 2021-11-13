import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from '../Text'
export default class Buttons extends Component {
    render() {
        const { title, style, onPress } = this.props;
        return (
            <TouchableOpacity  style={[styles.styleButton, style]} onPress={onPress}>
                <Text>{title}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    styleButton: {
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',

    }
})
