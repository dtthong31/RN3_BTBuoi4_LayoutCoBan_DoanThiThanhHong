import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native'

const scWidth = Dimensions.get('screen').width;
const size = 80;
export default function DemoTemplate() {
    const [state, setstate] = useState(false);
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;

    const rotate = translateX.interpolate({
        inputRange: [0, (scWidth - size) / 2],
        outputRange: ['0deg', '360deg'],
        extrapolate: 'clamp'
    });
    const backgroundColor = translateX.interpolate({
        inputRange: [(scWidth - size) / 2, (scWidth - size)],
        outputRange: ["orange", "red"],
        extrapolate: 'clamp'
    })
    const animation = Animated.timing(translateX, {
        toValue: scWidth - size,
        useNativeDriver: false,
        // duration: 3000
    });
    useEffect(() => {
        Animated.timing(translateX, {
            toValue: state ? 0 : scWidth - size,
            useNativeDriver: false,
            // duration: 3000
        }).start();
    }, [state, translateX]);

    const startAnimation = () => {
        setstate(!state);
    };
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { transform: [{ translateX }, { rotate }], backgroundColor }]} />
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

