import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'

export default class ListItemBottom extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <Image style={styles.styleImg} source={item.img} />
                <View style={styles.itemText}>
                    <Text style={styles.stylename} >{item.name} </Text>
                    <Text >{item.friend} </Text>
                </View>
                <TouchableOpacity style={styles.styleButton}>
                    <Text style={styles.styleTextBtn}>
                        Kết bạn
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 15,
        backgroundColor:'rgb(189, 189, 189)',
        borderRadius:10,
    },
    itemText: {
        flexDirection: 'column',
    },
    styleImg: {
        height: 80,
        width: 80,
        margin: 8,
        borderRadius: 100,
    },
    stylename: {
        fontWeight: '700',
        fontSize: 15,
        // textAlign: 'center'
    }, 
    styleButton: {
        backgroundColor:"#C9C9Ff",
        borderRadius:100,
        width:100,
        height:40,
        justifyContent:'center',
        alignItems:'center',
       marginLeft:50
    },
    styleTextBtn:{
        fontWeight: '700',
        fontSize: 15,
        
    }
})
