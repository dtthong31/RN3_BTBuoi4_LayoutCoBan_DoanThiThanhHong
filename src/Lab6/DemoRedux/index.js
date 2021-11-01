import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { countDownAction, countUpAction } from '../redux/actions/countActions';
import InfoContent from './InfoContent';

class DemoRedux extends Component {
    onCountUpPress =()=>{
        this.props.countUp();
    }
    onCountDownPress =()=>{
        this.props.countDown();
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.styleText}> Demo Redux </Text>
                <Text style={styles.styleText}>Number:{this.props.number}</Text>
                <View style={styles.styleButton}>
                    <TouchableOpacity style={styles.styleUp} onPress={this.onCountUpPress}>
                        <Text >Count Up</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.styleUp, styles.styleDown]} onPress={this.onCountDownPress}>
                        <Text >Count Down</Text>
                    </TouchableOpacity>
                </View>
                <InfoContent/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    styleButton: {
        flexDirection: 'row',
    },
    styleUp: {
        backgroundColor: "#bff",
        width: 100,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    styleDown: {
        backgroundColor: "#3fb"
    }

});
const mapStatetoProps = state =>{
    return {number: state.number}
}
const mapDispatchToProps = dispatch =>{
    return {
        countUp:()=>{
            dispatch(countUpAction());
        },
        countDown:()=>{
            dispatch(countDownAction());
        }   
     }
}
export default connect(mapStatetoProps,mapDispatchToProps)(DemoRedux);

