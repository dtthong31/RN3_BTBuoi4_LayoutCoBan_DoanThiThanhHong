import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import { angry, care, haha, like, love, sad } from './img'
import Icon from './Icon';
export default class ExRender extends Component {
    array = [angry, care, haha, like, love, sad];
    state = {
        selectEmoji: care,
    };

    onPressEmoji = selectEmoji => this.setState({ selectEmoji });

    renderEmoji = () => {
        return this.array.map((icon, index) => (
            <Icon
                selectEmoji={icon === this.state.selectEmoji}
                key={index}
                icon={icon}
                onPress={() => this.onPressEmoji(icon)} />
        ))
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}> Ban thấy thế nào? </Text>
                <Image style={styles.selectImage} source={this.state.selectEmoji}></Image>
                <View style={styles.emojiContainer}>{this.renderEmoji()}</View>
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
        fontWeight: '800',
        fontSize: 18,
    },
    selectImage: {
        // backgroundColor: 'gray',
        width: 100,
        height: 100,
    },

    emojiContainer: {
        flexDirection: 'row',
    }
})
