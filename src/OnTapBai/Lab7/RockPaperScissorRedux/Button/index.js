import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';
export default class Button extends Component {
    render() {
        const { title, colors, onPress,backgroundColor, isLinear } = this.props;
        if (isLinear) {
            return (
                <LinearGradient
                    style={styles.styleContainer}
                    colors={colors}
                >
                    <TouchableOpacity onPress={onPress} >
                        <Text style={styles.styleTextButton}> {title} </Text>
                    </TouchableOpacity>
                </LinearGradient>
            )
        }
        return (
            <TouchableOpacity style={[styles.styleContainer, { backgroundColor }]} onPress={onPress} >
                <Text style={styles.styleTextButton}> {title} </Text>
            </TouchableOpacity>
        )
    }
}
Button.defaultProps = {
    backgroundColor: '#000',
    colors: ['#fff', '#000'],
  };
const styles = StyleSheet.create({
    styleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 70,
        height: 40,
        borderRadius: 10,
        margin: 10,
    },
    styleTextButton: {
        color: 'white', fontSize: 20, fontWeight: '700'
    }
})
