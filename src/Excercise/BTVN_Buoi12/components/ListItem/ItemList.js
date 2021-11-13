import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import nike from '../image/nike.png';
import Text from '../Text';
export default class ItemList extends Component {
    render() {
        const { item } = this.props;
        console.log('Image', item.image);
        return (
            <TouchableOpacity>
                <View style={{ height: 220, }}>
                    <View style={styles.container}>
                        <View style={styles.styleImageView}>
                            <Image source={{ uri: item.image }} style={styles.styleImage} />
                        </View>
                        <View style={{ marginHorizontal: 10 }} >
                            <Text> {item.name} </Text>
                            <Text> ${item.price} </Text>
                        </View>
                    </View>
                    <View style={[styles.LogoContainer, StyleSheet.absoluteFill]}>
                        <Image source={require('../image/nike.png')} style={styles.styleLogoImage} />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232323',
        width: 140,
        height: 210,
        borderRadius: 20,
        marginHorizontal: 10,
    },
    styleImage: {
        width: 120,
        height: 150,
        transform: [{ rotate: '-25deg' }],
    },
    styleImageView: {
        justifyContent: 'center',
        paddingLeft: 5,
    },
    LogoContainer: {
        width: 157,
        height: 220,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },
    styleLogoImage: {
        width: 50,
        height: 50,
        borderRadius: 15,
    }
})
