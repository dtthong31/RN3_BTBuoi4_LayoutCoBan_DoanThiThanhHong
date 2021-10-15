import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, ScrollView } from 'react-native'
import Alto_0 from './img/Alto_0.png'
import Alto_icon from './img/Alto_icon.png'

export default class RenderList extends Component {
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
    }];
    renderListInfo = () => {
        return this.listData.map((item, index) => (
            <View style={[styles.info, { backgroundColor: item.backgroundColor }]}>
                <Image source={item.icon} style={styles.icon} />
                <View style={styles.infoContent}>
                    <Text>{item.title}</Text>
                    <Text>{item.subTitle}</Text>
                </View>
            </View>
        ));
    }
    render() {
        return (
            <View style={styles.container}>

                <ScrollView>
                {this.renderListInfo()}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#343434',
        justifyContent: 'center',
        alignItems: 'center',
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
    icon: {
        width: 50,
        height: 50,
        borderRadius: 10
    },
    infoContent: {
        width: '90%',
        
    }

});
