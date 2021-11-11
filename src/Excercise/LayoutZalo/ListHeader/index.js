import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'

export default class ListHeader extends Component {
    render() {
        const { item } = this.props;
        return (
            <View >
                <Image style={styles.styleImg} source={item.img} />
                <Text style={styles.stylename} >{item.name} </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
   
    styleImg: {
        height: 80,
        width: 80,
        margin: 8,
        borderRadius: 100,
    },
    stylename: {
        fontWeight: '700',
        fontSize: 15,
        textAlign:'center'
    }
})
