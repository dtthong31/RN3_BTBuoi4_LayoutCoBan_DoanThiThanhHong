import React, { Component } from 'react'
import { Text, StyleSheet, View, ImageBackground, StatusBar, Image, SafeAreaView, Alert } from 'react-native'
import Button from './Button';
import { bao, bgGame, bua, keo, player, playerComputer } from '../images'
import PlayContainer from './PlayContainer';
import SelectContent from './SelectContent';
import { connect } from 'react-redux';
import ButtonContent from './ButtonContent';
class RockPaperScissorRedux extends Component {
    
    
    calResult = () => {
        const { playerSelect, computerSelect, times, score } = this.state;
        let timesResult = times;
        let scoreResult = score;
        switch (playerSelect.id) {
            case 'keo':
                switch (computerSelect.id) {
                    case 'bao':
                        scoreResult = scoreResult + 1;
                        timesResult += 1;
                        break;
                    case 'bua':
                        timesResult -= 1;
                        break;
                    default:
                        break;
                }
                break;
            case 'bao':
                switch (computerSelect.id) {
                    case 'keo':
                        scoreResult = scoreResult + 1;
                        timesResult += 1;
                        break;
                    case 'bua':
                        timesResult -= 1;
                        break;
                    default:
                        break;
                }
                break;
            default:
                switch (computerSelect.id) {
                    case 'bua':
                        scoreResult = scoreResult + 1;
                        timesResult += 1;
                        break;
                    case 'keo':
                        timesResult -= 1;
                        break;
                    default:
                        break;
                }
                break;
        }
        this.setState({ times: timesResult, score: scoreResult })
    }

    render() {
        console.log('render');
        const {playerSelect,computerSelect,score, times}= this.props;
        return (
            <ImageBackground source={bgGame} style={styles.container}>
                <StatusBar barStyle='dark-content' />
                <SafeAreaView style={styles.safeAreaView}>
                    <View style={styles.overlay} />
                    <View style={styles.playContainer}>
                        <PlayContainer playImg={playerSelect.image} ironImg={player} />
                        <PlayContainer playImg={computerSelect.image} ironImg={playerComputer} />
                    </View>
                    <View style={styles.selectContainer} >
                        <SelectContent  />
                    </View>
                    <View style={styles.infoContainer} >
                        <Text style={styles.infoText}>Score:{score}</Text>
                        <Text style={styles.infoText}>Times:{times}</Text>
                    </View>
                    <ButtonContent/>
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
    infoText: {
        color: '#0fc',
        fontWeight: '700',
        fontSize: 22,

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
        flexDirection: 'row',
        justifyContent: 'center',

    },
    infoContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
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
const mapStatetoProps = (state) => {
    return {
        playerSelect: state.gameReduces.playerSelect,
        computerSelect: state.gameReduces.computerSelect,
        times: state.gameReduces.times,
        score: state.gameReduces.score,
    }
}

export default connect(mapStatetoProps)(RockPaperScissorRedux);