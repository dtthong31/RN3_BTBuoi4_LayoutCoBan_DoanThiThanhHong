import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
export default class DemoStyleSheet extends Component {
    render() {
        return (
            <View style={{flex:1 }}>
                <View style={[styles.boxStyle,styles.boxStylePurple]}>
                    <Text style={styles.textStyle}>Purple:#C9C9Ff </Text>
                </View>
                <View style={[styles.boxStyle,styles.boxStyleBlue]}>
                    <Text style={styles.textStyle }>Blue:#3D85C6 </Text>
                </View>

                <View style={[styles.boxStyle, styles.boxStyleGreen]}>
                    <Text style={styles.textStyle}>Green: #96CC96 </Text>
                </View>
                <View style={[styles.boxStyle,styles.boxStyleYellow]}>
                    <Text style={styles.textStyle}>Yellow: #F4B940 </Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    boxStyle: {
        flex:1,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 150,
        marginHorizontal: 10,
        marginBottom: 10,
    },
    textStyle : { fontWeight: '900', },
    boxStyleBlue:{
        backgroundColor: '#3D85C6',
        
    },
    boxStylePurple:{
        backgroundColor: '#C9C9Ff',
    },
    boxStyleYellow:{
        backgroundColor: '#F4B940',
    },
    boxStyleGreen:{
        backgroundColor: '#96CC96',
    },
})
