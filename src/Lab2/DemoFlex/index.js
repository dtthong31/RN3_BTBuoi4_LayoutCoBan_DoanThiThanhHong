import React, { Component } from 'react'
import { Text, View } from 'react-native'

export default class DemoFlex extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <View style={{backgroundColor:'#C9C9Ff',flex:1}}/>
                <View style={{backgroundColor:'#3D85C6',flex:2}}/>
                <View style={{backgroundColor:'#96CC96',flex:1}}/>
            </View>
        )
    }
}
