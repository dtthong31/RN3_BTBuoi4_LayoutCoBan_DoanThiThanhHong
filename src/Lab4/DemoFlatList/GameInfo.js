import React, { Component } from 'react'
import { Text, View,StyleSheet,Image } from 'react-native'

export default class GameInfo extends Component {
    render() {
        const{game}=this.props;
        return (
            <View style={[styles.info, { backgroundColor: game.backgroundColor }]}>
                <Image source={game.icon} style={styles.icon} />
                <View style={styles.infoContent}>
                    <Text>{game.title}</Text>
                    <Text>{game.subTitle}</Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    info: {
        marginVertical: 10,
        backgroundColor: '#fff6',
        flexDirection: 'row',
        marginHorizontal: 20,
        fontWeight: '900',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    icon: {
        width: 50,
        height: 50,
        borderRadius: 10
    }
    ,

    infoContent: {
        width: '90%',
        paddingLeft:10,
    }


})

