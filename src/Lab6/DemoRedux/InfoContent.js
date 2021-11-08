import React, { Component } from 'react';
import { Text, StyleSheet, View,TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
class InfoContent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> username:  </Text>
                <TouchableOpacity style={[styles.styleUp, styles.styleDown]} >
                    <Text >Update Username</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
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
})
const mapStatetoProps = state =>{
    return {number: state.number}
}
const mapDispatchToProps = dispatch =>{
    return {
        updateUsername:(username)=>{
            dispatch(countUpAction());
        },
          
     }
}
export default connect(mapStatetoProps,mapDispatchToProps)(InfoContent);
