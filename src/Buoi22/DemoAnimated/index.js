import React, { useEffect, useRef, useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, Animated } from 'react-native'

const scWidth = Dimensions.get('screen').width;
const size = 80;
export default function DemoAnimated() {
    const [state, setstate] = useState(false);
    const translateX = useRef(new Animated.Value(0)).current;
    const translateY = useRef(new Animated.Value(0)).current;
    const translateZ = useRef(new Animated.Value(0)).current;
    useEffect(() => {
        Animated.sequence([
            Animated.timing(translateX, {
                toValue: scWidth - size,
                useNativeDriver: false,
                // duration: 3000
            }),
            Animated.timing(translateY, {
                toValue: 100,
                useNativeDriver: false,
                // duration: 3000
            }),
            Animated.parallel([
                Animated.timing(translateX, {
                    toValue: 0,
                    useNativeDriver: false,
                    // duration: 3000
                }),
                Animated.timing(translateY, {
                    toValue: 0,
                    useNativeDriver: false,
                    // duration: 3000
                }),
            ])

        ]).start();

    }, [state, translateX, translateY, translateZ])

    const startAnimation = () => {
        setstate(!state);
    };
    return (
        <View style={styles.container}>
            <Animated.View style={[styles.box, { transform: [{ translateX }, { translateY }] }]} />
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

