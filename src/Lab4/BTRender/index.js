import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Icon from './Icon';
import { angry, care, haha, like, love, sad } from './images'

export default class BTRender extends Component {
    array = [angry, care, haha, like, love, sad];
    state = {
        selectedEmoji: care,
    }

    rrnderEmoij = () => {
        return this.array.map((icon, index) => (
            <Icon
                selectedEmoji={icon === this.state.selectedEmoji}
                key={index}
                icon={icon}
                onPress={() => this.onPressEmoji(icon)} />
        ));
    }
    onPressEmoji = (selectedEmoji) => this.setState({ selectedEmoji });
    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}> Ban cam thay nhu the nao? </Text>
                <Image style={styles.selectedEmoji} source={this.state.selectedEmoji} />
                <View style={styles.emojiContainer}>{this.rrnderEmoij()}</View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: '700',
        fontSize: 18,
    },
    selectedEmoji: {
        height: 150,
        width: 150,
        marginVertical: 10,
    },
    emojiContainer: {
        flexDirection: 'row',
    }

})
