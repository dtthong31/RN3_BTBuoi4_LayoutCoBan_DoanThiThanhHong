import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'

export default class Child extends Component {
    constructor(props) {
        super(props);
        console.log('contructor run');
        // this.state={
        //     numberChild:3,
        // }
    }
    // componentDidUpdate(){
    //     console.log("Child ComponentDidUpdate run");
    // }
    // static getDerivedStateFromProps(props,state){
    //     if(props.number>state.numberChild){
    //         return props.number=state.numberChild;
    //     }
    //     return state;
    // }
    // componentWillUnmount(){
    //     console.log('componentWillUnMount run');
    // }
    shouldComponentUpdate(nextProps) {
        if (nextProps.username != this.props.username) {
            return true;
        } return false;
    }
    render() {
        console.log('render');
        return (
            <>
                <Text> DemoChild Component </Text>
                <Text> Number :{this.props.number} </Text>
                <Text> Username :{this.props.username} </Text>
            </>
        )
    }
    componentDidMount() {
        console.log("Component did mount");
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
