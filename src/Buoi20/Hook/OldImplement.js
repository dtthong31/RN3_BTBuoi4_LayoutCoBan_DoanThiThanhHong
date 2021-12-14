import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

function Hook(props) {
    return <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text>{props.title}</Text>
        <TouchableOpacity>
            <Text> Change title</Text>
        </TouchableOpacity>
    </View>
}
export default class WrapHook extends Component {
    state={
        title:'React native 03',
    }
    setState= title=>{
        this.setState({title});
    }
    render() {
        return (
            <Hook title={this.state.title} setState={this.setState} />
        )
    }
}
