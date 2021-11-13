import axios from 'axios'
import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import IconButtonHeader, { fontIcon } from './components/IconButtonHeader'
import ListItem from './components/ListItem'
import NewItem from './components/NewItem'
import Text from './components/Text'
export default class BTVN_Buoi12 extends Component {

    state = {
        listProduct: [
            id = '',
            name = '',
            price = '',
            image = '',
            categories = [
                id = '',
                category = '',
            ],

        ],
    };
    componentDidMount() {
        const getAllProduct = axios({
            url: 'http://svcy3.myclass.vn/api/Product',
            method: 'GET'
        });
        Promise.all([getAllProduct]).then(([resultProduct]) => {
            const listProduct = resultProduct.data.content;
            this.setState({ listProduct });
        }).catch((error) => console.log(error));
    }
    render() {
        const { listProduct } = this.state;
        // console.log("cattegories");
        return (
            <View style={styles.container}>
                <View style={styles.iconButtonHeader}>
                    <IconButtonHeader nameIcon="reorder-two" size={50} color="white" />
                    <IconButtonHeader nameIcon="shopping-bag" font={fontIcon.materialIcons} size={30} color="white" />
                </View>
                <View style={styles.content}>
                    <Text style={styles.styleTextContent}>Discover</Text>
                    <Text>Explore the New Collection of Sneakers</Text>
                </View>
                <View style={styles.newItem}>
                    <NewItem itemProduct={listProduct[0]} />
                </View>
                <View style={styles.listItem} >
                    <ListItem listProduct={listProduct}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black",
    },
    iconButtonHeader: {
        flex: 0.35,
        height: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    content: {
        flex: 0.4,
        marginLeft: 20
    },
    styleTextContent: {
        fontSize: 30,
        fontWeight: 'bold',
        color: 'white',
    },
    listItem: {
        flex: 1.5,
        // backgroundColor: "#bbf"
    },
    newItem: {
        flex: 1.4,

    }
})
