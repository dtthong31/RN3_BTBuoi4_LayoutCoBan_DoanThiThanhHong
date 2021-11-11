import React, { Component } from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native'
import angry from './img/angry.png'
import care from './img/care.png'
import haha from './img/haha.png'
import like from './img/like.png'
import love from './img/love.png'
import sad from './img/sad.png'
export default class BtBindingData extends Component {
    listImage = [
        { icon: angry },
        { icon: care },
        { icon: haha },
        { icon: like },
        { icon: love },
        { icon: sad },
    ];
    state = {
        icon: care,
    }
    onChangeIcon = (image) => {
        this.setState({
            icon: image,
        })
    }
    renderIcon = () => {
        return this.listImage.map((item) => (
            <TouchableOpacity onPress={() => this.onChangeIcon(item.icon)}>
                <Image source={item.icon} style={styles.styleIcon} />
            </TouchableOpacity>
        ))
    }
    renderImage = (img) => {
        let stt = this.listImage.findIndex(sp => sp.icon === img);
        console.log("Vị trí của icon: " + stt);
        return <Image source={this.listImage[stt].icon} style={styles.styleImg} />
    };

    render() {
        console.log('render');
        console.log();
        return (
            <View style={styles.container}>
                <Text style={styles.styleText}> Bạn đang cảm thấy như thế nào?</Text>
                {this.renderImage(this.state.icon)}
                <View style={styles.styleListIcon}>
                    {this.renderIcon()}
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    styleText: {
        fontWeight: '800',
        fontSize: 22,
        marginVertical: 10,
    },
    styleImg: {
        height: 200,
        width: 200,
        borderWidth: 2,
        borderRadius: 100,
        borderColor: 'gray',
    },
    styleListIcon: {
        flex: 1,
        flexDirection: 'row',
        marginVertical: 10,
    },
    styleIcon: {
        height: 40,
        width: 40,
        marginHorizontal: 5,
    }
})
