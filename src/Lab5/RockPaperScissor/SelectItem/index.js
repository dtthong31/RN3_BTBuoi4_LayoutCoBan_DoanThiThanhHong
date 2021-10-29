import React, { Component } from 'react'
import { Text, StyleSheet, View,Image, TouchableOpacity} from 'react-native'

export default class SelectItem extends Component {
    
    render() {
        const {selectImage,onPress,select}= this.props;
        return (
            <TouchableOpacity style={[styles.cotainer, styles.selectedItem && select]} onPress={onPress}>
                <Image style={styles.selectImg} source={selectImage}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cotainer:{
        width:70,
        height:70,
        backgroundColor:'rgba(0,0,0,0.5)',
       
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
    },
        selectedItem:{
            borderWidth:2,
            borderColor:'#ff0',
        }
    ,selectImg:{
        width:50,
        height:50,
    }
})
