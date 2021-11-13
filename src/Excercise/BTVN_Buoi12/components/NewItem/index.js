import React, { Component } from 'react'
import { Text, Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import Foundation from "react-native-vector-icons/Foundation"
export default class NewItem extends Component {
    render() {
        const { itemProduct } = this.props;
        const { image, name, price, categories } = itemProduct;
        console.log(image, name);
        return (
            <View >
                <View style={styles.textNewest}>
                    <Text style={[styles.styleText, styles.styleTextTitle]}> Newest Collection</Text>
                    <TouchableOpacity>
                        <Text style={styles.styleText}> See all</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.container}>
                    <Image source={require('../image/logoNike.png')} style={[StyleSheet.absoluteFill, styles.styleLogo]} />
                    <View style={styles.styleNewImage}>
                        <Image source={{ uri: image }} style={styles.styleImage} />
                    </View>
                    <View style={styles.styleItem}>
                        <View>
                            <Text style={[styles.styleText, { fontWeight: 'bold' }]}>{name}</Text>
                            <Text style={[styles.styleText, { color: 'gray' }]}>Men's shose | 7 Colors | Free shipping</Text>
                            <Text style={[styles.styleText, { fontWeight: 'bold' }]}>${price}</Text>
                        </View>
                        <TouchableOpacity>
                            <Foundation name="heart" color="white" size={40} />
                        </TouchableOpacity>
                    </View>
                </TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232323',
        height: 210,
        borderRadius: 20,
        marginHorizontal: 15
    },
    styleItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 15,

    },
    styleNewImage: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleImage: {
        marginTop: 20,
        height: 100,
        width: 200,
    },
    styleText: {
        color: 'white',
        // justifyContent: 'flex-start'
    },
    styleTextTitle: {
        color: 'white', fontSize: 25, fontWeight: 'bold'
    },
    textNewest: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginHorizontal: 15,
        alignItems: 'baseline',
        marginBottom: 20,
    },
    styleLogo: { width: 50, height: 50, marginVertical: 15, marginHorizontal: 20 }
})
