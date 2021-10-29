import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SelectItem from '../SelectItem'

export default class SelectContent extends Component {
    rederSelectItem = () => {
        return this.props.listSelect.map(selectItem => (
            <SelectItem
                key={selectItem.id}
                selectImage={selectItem.image}
                onPress={()=>this.props.onSelect(selectItem) } 
                selected={selectItem.id === this.playerSelectItem}/>
        ))
    };
    render() {
        
        return this.rederSelectItem();
        
    }
}

const styles = StyleSheet.create({})
