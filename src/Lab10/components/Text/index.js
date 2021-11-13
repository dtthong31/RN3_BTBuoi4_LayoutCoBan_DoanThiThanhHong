import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

export default class AppText extends Component {
    render() {
        const {children,style}= this.props;
        console.log(children);
        return (
            <Text style={[styles.defaultTextStyle,style]}> {children} </Text>
        )
    }
}

const styles = StyleSheet.create({
    defaultTextStyle:{
        color:'#fff'
    }
})
