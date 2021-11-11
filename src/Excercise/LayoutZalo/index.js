import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon5 from 'react-native-vector-icons/FontAwesome5';
import { blackwidow, captain, flash, ironman, strange, suppergirl, spiderman, wanda, wonderwoman, yasuo } from './images'
import ListHeader from './ListHeader';
import ListItemBottom from './ListItemBottom';
export default class LayoutZalo extends Component {
    listIronMan = [
        {
            name: 'Wanda',
            img: wanda,
            friend:'15 bạn chung'
        },
        {
            name: 'SpiderMan',
            img: spiderman,
            friend:'15 bạn chung'
        },
        {
            name: 'Yasuo',
            img: yasuo,
            friend:'15 bạn chung'
        },
        {
            name: 'Ironman',
            img: ironman,
            friend:'15 bạn chung'
        },
        {
            name: 'Captain',
            img: captain,
            friend:'15 bạn chung'
        },
        {
            name: 'Flash',
            img: flash,
            friend:'15 bạn chung'
        },
        {
            name: 'Kara',
            img: suppergirl,
            friend:'15 bạn chung'
        },
        {
            name: 'Diana',
            img: wonderwoman,
            friend:'15 bạn chung'
        },
        {
            name: 'Natasha',
            img: blackwidow,
            friend:'15 bạn chung'
        },
        {
            name: 'Strange',
            img: strange,
            friend:'15 bạn chung'
        }
    ];
    renderItemheader = ({ item }) => <ListHeader item={item} />
    renderItemBottom =({item})=><ListItemBottom item={item} />
    render() {
        console.log("render");

        return (
            <View style={styles.container}>
                <View style={styles.headerItem}>
                    <Icon name="history" size={30} />
                    <Text style={styles.textHeader}> Danh sách tìm kiếm gần đây</Text>

                </View>
                <View>
                    <FlatList
                        contentContainerStyle={styles.scrollContent}
                        data={this.listIronMan}
                        renderItem={this.renderItemheader}
                        keyExtractor={(item, index) => `${item.name}_${index}`}
                        horizontal={true} />
                </View>
                <View style={styles.headerItem}>
                    <Icon5 name="user-friends" size={30} />
                    <Text style={styles.textHeader}> Gợi ý kết bạn</Text>
                </View>
                <View style={{marginVertical:5}}>
                    <FlatList
                        // contentContainerStyle={styles.scrollContent}
                        data={this.listIronMan}
                        renderItem={this.renderItemBottom}
                        keyExtractor={(item, index) => `${item.name}_${index}`}
                        />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    headerItem: {
        flexDirection: 'row',
        marginTop: 15,
        alignItems: 'center',
        flexWrap: 'wrap',
        marginHorizontal: 15,
    },
    textHeader: {
        fontSize: 25,
        fontWeight: '700',
    },
    scrollContent: {
        margin: 5,
        flexDirection: 'row'
    }
})
