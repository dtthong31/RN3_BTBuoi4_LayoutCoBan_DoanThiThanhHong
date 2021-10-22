import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, StatusBar, Image, SafeAreaView } from 'react-native'
import Button from '../Button';
import { bao, bgGame, bua, keo, player, playerComputer } from '../images'
import PlayContainer from '../PlayContainer';
import SelectItem from '../SelectItem';

export default class RockPaperScissor extends Component {
   
    render() {
        return (
            <ImageBackground source={bgGame} style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.overlay} />
                    <View style={styles.playContainer}>
                        <PlayContainer playImg={keo} ironImg={player} />
                        <PlayContainer playImg={bao} ironImg={playerComputer} />

                    </View>
                    <View style={styles.selectContainer} >
                        <SelectItem selectItem={keo}/>
                        <SelectItem selectItem={bao}/>
                        <SelectItem selectItem={bua}/>
                    </View>
                    <View style={styles.infoContainer} >
                        <Text style={styles.infoText}>Score:0</Text>
                        <Text style={styles.infoText}>Times:9</Text>
                    </View>
                    <View style={styles.buttonContainer} >
                        <Button  title='Play' colors={['#f9f','#ff0']}/>
                        <Button  title='Reset' colors={['#f9f','#ff0']}/>
                    </View>
                </SafeAreaView>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    triangle: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderLeftWidth: 15,
        borderRightWidth: 15,
        borderTopWidth: 15,
        borderLeftColor: "transparent",
        borderRightColor: "transparent",
        borderTopColor: "yellow",
        position: 'absolute',
        top: 100,
        right: '32.5%',

    },
    safeAreaView: { flex: 1 },
    overlay: {
        ...StyleSheet.absoluteFill,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    infoText:{
        color:'#0fc',
        fontWeight:'700',
        fontSize:22,
        
    },
    playContainer: {
        flex: 3,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 30,
        marginBottom: 15,
        marginTop: 30,
    },
    selectContainer: {
        flex: 1,
        flexDirection:'row',
        justifyContent:'center',
       
    },
    infoContainer: {
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer: {
        flex: 2,
        flexDirection:'row',
        marginVertical:15,
        alignItems:'flex-start',
        justifyContent:'center'
    },
    styImg: {
        height: 100,
        width: 100,

    },
    colorBorderImg: {
        borderWidth: 3,
        borderColor: 'yellow',
        borderRadius: 10,
        backgroundColor: 'rgba(0,0,0,0.5)',
        marginBottom: 15,
    }

})
