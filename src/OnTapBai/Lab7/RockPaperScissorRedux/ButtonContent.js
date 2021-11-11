import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { calResultAction, userPlayAction, userResetAction } from '../redux/actions/gameActions'
import Button from './Button'

class ButtonContent extends Component {
    onPlayPress = () => {
        const randomBotSelect = setInterval(() => {
            this.props.userPlay();
        }, 10);
        setTimeout(() => {
            clearInterval(randomBotSelect);
            this.props.calResult();
        }, 3000);
    }
    render() {
        return (
            <View style={styles.buttonContainer}>
                <Button title='Play' onPress={this.onPlayPress} />
                <Button
                    onPress={this.props.userReset}
                    title='Reset'
                    backgroundcolor="#ff0"
                    colors={['#f9f', '#ff0']}
                    isLinear={true} />
            </View>
        )
    }
}
const styles = StyleSheet.create({
    buttonContainer: {
        flex: 2,
        flexDirection: 'row',
        // marginVertical: 15,
        // alignItems: 'flex-start',
        justifyContent: 'center'
    },
})
const mapDispatchToProps = dispatch => {
    return {
        userPlay: () => {
            dispatch(userPlayAction());
        },
        calResult: () => dispatch(calResultAction()),
        userReset: () => dispatch(userResetAction())
    }
}
export default connect(null, mapDispatchToProps)(ButtonContent);