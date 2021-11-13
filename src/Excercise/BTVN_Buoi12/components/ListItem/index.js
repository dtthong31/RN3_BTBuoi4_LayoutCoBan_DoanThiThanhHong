import React, { Component } from 'react'
import { StyleSheet, View, FlatList, Image, TouchableOpacity } from 'react-native'
import ItemList from './ItemList';
import Text from '../Text';
export default class ListItem extends Component {
    renderItem = ({ item }) => <ItemList item={item} />
    render() {
        const { listProduct } = this.props;


        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={[styles.styleTextHeader]}> Most Popular </Text>
                    <TouchableOpacity>
                        <Text > See all</Text>
                    </TouchableOpacity>
                </View>
                <FlatList
                    data={listProduct}
                    renderItem={this.renderItem}
                    horizontal={true}
                    keyExtractor={(item, index) => `${item.id}_${index}`} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'baseline',
        marginBottom: 20,
    },
    styleText: {
        color: 'white',
    },
    styleTextHeader: {
        fontSize: 25,
        fontWeight: 'bold'
    }
})
