import React, { Component } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Antd from 'react-native-vector-icons/AntDesign'
export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.styleButton}>
                    <TouchableOpacity style={styles.btn} onPress={this.props.navigateToOnBoardScreen} >
                        <Antd name='left' size={30} color='white' />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text></Text>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 30,
    },
    styleButton: {
        marginTop: 30,
        width:50,
        height:50,
        backgroundColor: '#fff',
        borderRadius: 15,
        // marginTop: 10,
        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
        width:48,
        height:48,
        backgroundColor: '#040305',
        borderRadius: 15,
        borderWidth: 0.5,
        // margin: 0.5,
        justifyContent:'center',
        alignItems:'center',
    }
})

