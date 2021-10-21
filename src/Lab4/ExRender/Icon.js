import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { care } from './img/index';
export default class Icon extends Component {
    render() {
        // console.log(this.props);
        const { icon, onPress, selectedEmoji } = this.props;
        return (
            <TouchableOpacity
                style={[selectedEmoji && styles.selectedContainer, styles.selectedIcon]}
                onPress={onPress}>
                <Image style={styles.emoji} source={icon} />
            </TouchableOpacity>

        )
    }
}
const styles = StyleSheet.create({
    emoji: {
        // backgroundColor: 'gray',
        width: 50,
        height: 50,
        margin: 5,
        borderRadius: 25,
    },
    selectedContainer: {
        borderColor: 'gray',
        borderWidth: 2,
    },
    selectedIcon: {
        padding: 0.1,
        borderRadius: 100
    }
})
