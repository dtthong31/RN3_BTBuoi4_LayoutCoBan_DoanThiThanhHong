import React,{ Component } from "react";
import { View,Text } from "react-native";

export class DemoComponentNonDefault extends Component{
    render(){
        return(
            <View>
                <Text style={{fontSize:20, fontWeight:'700'}}>Demo app</Text>
                <Text style={{fontSize:20}}>React-Native Center</Text>
            </View>
        );
    }
}