import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Alto_0 from './images/Alto_0.png'
import Alto_icon from './images/Alto_icon.png'

export default class BaiTapUI extends Component {
    data = {
       
        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    };

    render() {
   
        return (
            <View style={styles.container}>
                <Image source={this.data.preview}/>
                <View style={[styles.info,{backgroundColor:this.data.backgroundColor}]}>
                    <Image source={this.data.icon} style={styles.icon}/>
                    <View style={styles.infoContent}>
                        <Text>{this.data.title}</Text>
                        <Text>{this.data.subTitle}</Text>
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#343434',
        justifyContent:'center',
        alignItems:'center',
    },
    info:{
       marginVertical:10,
        backgroundColor:'#fff6',
        flexDirection:'row',
        marginHorizontal:20,
        fontWeight:'900',
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10
    },
    icon:{
        width:50,
        height:50,
        borderRadius:10
    },
    infoContent:{
        width:'90%',
        paddingHorizontal:10,
    }

});
