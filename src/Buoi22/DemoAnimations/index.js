import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const scWidth = Dimensions.get('screen').width;
const size = 80;
export default function DemoAnimations() {
    const [translateX, setTranslateX] = useState(0);
    const startAnimation = () => {
        for (let index = 0; index < scWidth - size; index++) {
            setTimeout(() => {
                // console.log(index);
                setTranslateX(index);
            }, index * 10);
        }
    }
    return (
        <View style={styles.container}>
            <View style={[styles.box, { transform: [{ translateX }] }]} />
            <TouchableOpacity onPress={startAnimation}>
                <Text>Start animation</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    },
    box: {
        width: size,
        height: size,
        backgroundColor: "orange",
        marginBottom: 10,
        transform: [{ translateX: scWidth - 80 }]
    }
})

