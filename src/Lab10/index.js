import React, { Component } from 'react'
import { Text, View } from 'react-native'
import LoginScreen from './LoginScreen'
import OnBroadScreen from './OnBroadScreen'

export default class RootScreen extends Component {
    state = {
        showLogin: false,
    }
    navigateToOnLoginScreen = () => this.setState({ showLogin: true });
    navigateToOnBoardScreen = () => this.setState({ showLogin: false });
    render() {
        return (
            <>
                {this.state.showLogin ? (
                    <LoginScreen navigateToOnBoardScreen={this.navigateToOnBoardScreen}  />
                ) : (
                    <OnBroadScreen navigateToOnLoginScreen={this.navigateToOnLoginScreen} />
                )}
            </>
        )
    }
}
