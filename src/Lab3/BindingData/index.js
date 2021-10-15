import React, { Component, Fragment } from 'react'
import { Text, View, StyleSheet, Button, TouchableOpacity, TouchableHighlight } from 'react-native'

export default class BindingData extends Component {
    name = 'RN3';
    address = 'TP.HCM';
    state = {
        isLogin: false,
    };
    renderName() {
        if (this.state.isLogin)
            return <>
                <Text> {this.name} </Text>
                <Text> {this.address} </Text>
            </>;
        return
    };

    onPressButton = () => {
        console.log('Button Press HighLight');
        this.setState({ isLogin: true },()=>{
            console.log(this.state.isLogin);
        });
        
    };
    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                <Text> Binding Data </Text>
                <Text> {this.renderName()} </Text>
                {/* Boi */}
                {/* <Button style={styles.btn} title="Sign In" color="red"/> */}
                <TouchableOpacity style={styles.btn} onPress={this.onPressButton}>
                    <Text>Sign In</Text>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
                <TouchableHighlight
                    underlayColor='red'
                    style={[styles.btn, styles.btnHighlight]}
                    onPress={this.onPressButton}>
                    <Fragment>
                        <Text>Sign Out</Text>
                        <Text>Sign Out</Text>
                    </Fragment>
                </TouchableHighlight>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    btn: {
        height: 50,
        width: 100,
        backgroundColor: '#FF00FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginVertical: 5,
        flexDirection: 'row'
    },
    btnHighlight: {
        backgroundColor: 'green',
    }

})
