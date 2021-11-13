import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import Text from '../Text';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto'
export const fontIcon = {
    antDesign: 'AntDesign',
    fontAwesome: 'FontAwesome',
    ionicons: 'Ionicons',
    fontisto: 'Fontisto'
}
export default class ButtonIcon extends Component {

    renderIconButton = () => {
        const { font, name, size, color } = this.props;

        switch (font) {
            case fontIcon.fontAwesome:
                return <FontAwesome name={name} size={size} color={color} />;
            case fontIcon.ionicons:
                return <Ionicons name={name} size={size} color={color} />;
            case fontIcon.fontisto:
                return <Fontisto name={name} size={size} color={color} />
            default:
                return <AntDesign name={name} size={size} color={color} />;
        }
    }
    render() {
        const { style, onPress } = this.props;
        return (
            <TouchableOpacity activeOpacity={1} style={[styles.styleButton, style]} onPress={onPress}>
                {this.renderIconButton()}
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
