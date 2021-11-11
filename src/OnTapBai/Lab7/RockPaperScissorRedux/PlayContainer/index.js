import React, { Component } from 'react'
import { Text, StyleSheet, View ,Image} from 'react-native'

export default class PlayContainer extends Component {
    render() {
        const {playImg,ironImg}= this.props;
        // console.log(playImg);
        return (
            <View>
                <Image style={[styles.styImg, styles.colorBorderImg]} source={playImg} />
                <View style={styles.triangle} />
                <Image source={ironImg} style={styles.styImg} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderTopWidth: 15,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "yellow",
        position: 'absolute',
        top: 100,
        right: '32.5%',

    }, styImg: {
        height: 100,
        width: 100,

    },
    colorBorderImg: {
        borderWidth: 3,
        borderColor: 'yellow',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginBottom: 15,
    }
})
