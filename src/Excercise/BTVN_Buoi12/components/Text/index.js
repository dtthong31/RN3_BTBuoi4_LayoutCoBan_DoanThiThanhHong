import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class TextApp extends Component {
    render() {
        const {style}= this.props;
        return (
            <Text style={[styles.styleText,style]}> {this.props.children} </Text>
        )
    }
}

const styles = StyleSheet.create({
    styleText:{
        color:'white',
    }
})
