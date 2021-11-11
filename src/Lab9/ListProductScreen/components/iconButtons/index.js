import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
export default class iconButtons extends Component {
    
    render() {
        const {name,color}= this.props;
        console.log("name",name);
        return (
            <TouchableOpacity>
                <Icon name={name} size={50} color={color}/>
            </TouchableOpacity>
            
        )
    }
}
