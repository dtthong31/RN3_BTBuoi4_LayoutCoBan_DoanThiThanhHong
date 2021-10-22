import React, { Component } from 'react'
import { Text, StyleSheet, View,Image} from 'react-native'

export default class SelectItem extends Component {
    
    render() {
        const {selectItem}= this.props;
        return (
            <View style={styles.cotainer}>
                <Image style={styles.selectImg} source={selectItem}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    cotainer:{
        width:70,
        height:70,
        backgroundColor:'rgba(0,0,0,0.5)',
        borderWidth:2,
        borderColor:'#ff0',
        borderRadius:10,
        justifyContent:'center',
        alignItems:'center',
        marginLeft:15,
    },selectImg:{
        width:50,
        height:50,
    }
})
