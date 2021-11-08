import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import Child from './Child';

export default class DemoLifeCycle extends Component {
    constructor(){
        super();
        console.log('contructor run');
        this.state={
            number:0,
            username:''
        }
        // console.log('constructor');
    }
    // state ={number:0};
    // static getDerivedStateFromProps(props,state){
    //     console.log("getDricesStateFromProps run");
    //     return state;
    // }
    // shouldComponentUpdate(){
    //     console.log("shouldComponet run");
    //     return true;
    // }
    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                <Text> DemoLifecycle Component </Text>
                <TouchableOpacity style={{backgroundColor:"#bff"}} onPress={(()=>this.setState({number: this.state.number+1}))}>
                    <Text>Count Up</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor:"#bff"}} onPress={(()=>this.setState({username: 'RN3'}))}>
                    <Text>Change UserName</Text>
                </TouchableOpacity>
                 <Child number={this.state.number} username={this.state.username}/>
            </View>
             
        )
    }
    componentDidMount(){
        console.log("Component did mount");
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
