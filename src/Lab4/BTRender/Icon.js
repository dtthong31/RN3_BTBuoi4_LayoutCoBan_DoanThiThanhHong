import React, { Component } from 'react'
import { TouchableOpacity, StyleSheet, Image } from 'react-native'
import { care } from './images'
export default class Icon extends Component {
    render() {
        const { icon, onPress,selectedEmoji } = this.props;
        return (
            <TouchableOpacity onPress={onPress} style={[selectedEmoji && styles.selectedIcon,styles.clickIcon]}>
                <Image
                    style={[styles.emoji ]}
                    source={icon} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    emoji: {
        height: 50,
        width: 50,
        margin: 5,
        borderRadius:25,
    },
    selectedIcon: {
        borderColor: 'gray',
        borderWidth: 2,
    }, 
    clickIcon:{
        padding:0.1,
        borderRadius:100
    }

})
