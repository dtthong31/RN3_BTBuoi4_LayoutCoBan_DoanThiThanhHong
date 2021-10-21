import React, { Component } from 'react'
import { Text, View, StyleSheet, SectionList, Image, ScrollView, FlatList } from 'react-native'
import Alto_0 from '../../Lab3/RenderList/img/Alto_0.png'
import Alto_icon from '../../Lab3/RenderList/img/Alto_icon.png'
import GameInfo from '../DemoFlatList/GameInfo'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class DemoSectionList extends Component {
    listData = [{
        title: 'background blue',
        data: [
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            }, {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },

        ]
    },
    {
        title: 'background red',
        data: [
            {

                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'red',
            }, {

                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'red',
            }, {

                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'red',
            }
        ]
    },
    {
        title: 'background green',
        data: [
            {

                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'green',
            }, {

                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'green',
            }, {

                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'green',
            }, {

                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'green',
            }, {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
            {
                title: "Alto's Odyssey",
                icon: Alto_icon,
                subTitle:
                    'Just beyond the horizon sits a majestic desert, vast and unexplored.',
                preview: Alto_0,
                backgroundColor: 'blue',
            },
        ]
    }
    ];
    renderItem = ({ item }) => <GameInfo game={item} />
    render() {
        console.log('render');
        return (
            <View style={styles.container}>
                {/* <ScrollView style={styles.scrollContainer} contentContainerStyle={styles.scrollContent}>
                    {this.renderListInfo()}
                </ScrollView> */}
                {/* <View style={styles.scrollContainer}>
                    <FlatList
                        contentContainerStyle={styles.scrollContent}
                        data={this.listData}
                        renderItem={this.renderItem}
                        keyExtractor={(item, index) => `${item.title}_${index}`}
                    />
                </View> */}
                <SectionList
                    sections={this.listData}
                    renderItem={this.renderItem}
                    stickySectionHeadersEnabled={true}
                    renderSectionHeader={({ section: { title } }) =>
                        <View style={styles.headerSection}>
                            <Text>{title}</Text>
                            <Icon name="vimeo-square" />
                        </View>}
                />
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
    },
    info: {
        marginVertical: 10,
        backgroundColor: '#fff6',
        flexDirection: 'row',
        marginHorizontal: 20,
        fontWeight: '900',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    headerSection: {
        backgroundColor: '#bbb',
        paddingVertical: 10,
    }
});
