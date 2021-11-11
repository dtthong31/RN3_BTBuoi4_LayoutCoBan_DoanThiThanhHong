import React, { Component } from 'react'
import { Text, StyleSheet, View, SafeAreaView, StatusBar } from 'react-native';
import BackgoundView from './components/BackgoundView'
import iconButtons from './components/iconButtons';

export default class ListProductScreen extends Component {
    render() {
        console.log("render");
        return (
            <BackgoundView>
                <View style={styles.header}>
                    <iconButtons name="close" color="#fff"/>
                </View>
                <View style={styles.category}></View>
            </BackgoundView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
       height:50,
       backgroundColor: '#fff',
    },
    content: {
        flex: 2,
        backgroundColor: '#000'
    },
    insideContent: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopRightRadius: 80,
    },
    category:{
        backgroundColor: '#fff',
    }
})
