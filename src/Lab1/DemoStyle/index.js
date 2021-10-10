import React, { Component } from "react";
import { View, Text } from "react-native";

export default class DemoStyle extends Component {
    render() {
        return (
            <View style={{ marginTop:40 ,paddingLeft: 10, paddingRight: 10,  }}>
                <View style={{ borderRadius: 10, backgroundColor: '#C9C9Ff', justifyContent: 'center', alignItems: 'center', height: 150 }}>
                    <Text style={{fontWeight:'900',color:'black'}}>Purple:#C9C9Ff </Text>
                </View>
                <View style={{ marginTop: 10,borderRadius: 10, backgroundColor: '#3D85C6', justifyContent: 'center', alignItems: 'center', height: 150 }}>
                    <Text style={{fontWeight:'900',color:'black'}}>Blue:#3D85C6 </Text>
                </View>

                <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: '#96CC96', justifyContent: 'center', alignItems: 'center', height: 150 }}>
                    <Text style={{fontWeight:'900',color:'black'}}>Green: #96CC96 </Text>
                </View>
                <View style={{ marginTop: 10, borderRadius: 10, backgroundColor: '#F4B940', justifyContent: 'center', alignItems: 'center', height: 150 }}>
                    <Text style={{fontWeight:'900',color:'black'}}>Yellow: #F4B940 </Text>
                </View>
            </View>
        );
    }
}
