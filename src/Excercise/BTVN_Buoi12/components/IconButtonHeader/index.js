import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const fontIcon={
    materialIcons: 'materialIcons',
}
export default class IconButtonHeader extends Component {
    renderIcon = () => {
        const { nameIcon, size, color,font } = this.props;
        switch (font) {
            case fontIcon.materialIcons:
                return <MaterialIcons name={nameIcon} size={size} color={color} />;
            default:
                return <Ionicons name={nameIcon} size={size} color={color} />;
        }
    }
    render() {

        return (
            <TouchableOpacity style={styles.styleButtons}>
                {this.renderIcon()}
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    styleButtons: {
        width: 50,
        height: 50,
        margin: 10,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#121010"
    }
})

