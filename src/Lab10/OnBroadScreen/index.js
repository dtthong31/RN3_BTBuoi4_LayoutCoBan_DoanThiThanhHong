import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import Buttons from '../components/Buttons'
import Text from '../components/Text'
export default class OnBroadScreen extends Component {
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle='light-content' />
                <View style={styles.bannerContainer} />

                <View style={styles.infoContainer}>
                    <Text style={styles.headerText}>Welcome to ...</Text>
                    <Text style={styles.decriptionText}>Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Magni minima debitis
                        aliquam. Natus tempora ea a in ut?
                        Quaerat, dolorum corrupti eaque totam
                        repellendus facere? Incidunt quod
                        odit magnam nisi!</Text>
                </View>
                <View style={styles.buttonContainer} >
                    <Buttons title={"Sign up"} style={styles.signUpButton} />
                    <View style={styles.gradient}>
                        <Buttons onPress={this.props.navigateToOnLoginScreen} title={"Login"} style={styles.lgbtn} />
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000'
    },
    bannerContainer: {
        flex: 2,
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 30,
    },
    decriptionText: {
        opacity: 0.7,
        marginTop: 20,
    },
    infoContainer: {
        flex: 1,

    },
    buttonContainer: {
        flex: 1,

    },
    signUpButton: {
        height: 70,
        backgroundColor: '#19191f',
    },
    lgbtn: {
        height: 70,
        backgroundColor: '#040305',
        borderRadius: 15,
        borderWidth: 1,
        margin: 1,

        // borderColor: "yellow"
    },
    gradient: {
        height: 72,
        backgroundColor: "rgb(248,72,72)",
        borderRadius: 15,
        marginTop: 10,
    }



})
