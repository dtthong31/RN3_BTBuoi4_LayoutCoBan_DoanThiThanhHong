import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView, FlatList } from 'react-native'
import Alto_0 from '../../Lab3/RenderList/img/Alto_0.png'
import Alto_icon from '../../Lab3/RenderList/img/Alto_icon.png'
import GameInfo from './GameInfo'
export default class DemoFlatList extends Component {
    listData = [{

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    }, {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    }, {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    {

        title: "Alto's Odyssey",
        icon: Alto_icon,
        subTitle:
            'Just beyond the horizon sits a majestic desert, vast and unexplored.',
        preview: Alto_0,
        backgroundColor: '#824671CC',
    },
    ];
    renderItem=({ item }) => <GameInfo game={item} />
    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                
                <View style={styles.scrollContainer}>
                    <FlatList
                        contentContainerStyle={styles.scrollContent}
                        data={this.listData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => `${item.title}_${index}`}
                    />
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343434',

    },
    scrollContainer: {
        marginVertical: 50,
        backgroundColor: 'gray',
    },
    scrollContent: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingEnd: 5,
    }

});
