import React, { Component } from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default class DemoCallApi extends Component {
    state={
        product:{
            image:'',
            price:0,
            name:'',
            description:'',
        }
    }
    componentDidMount() {
        fetch('http://svcy3.myclass.vn/api/Product')
            .then(response => response.json())
            .then(data => {
                const image = data.content[0].image;
                const price = data.content[0].price;
                const description = data.content[0].description;
                const name = data.content[0].name;
                const product ={image,price,description,name};
                this.setState({product});
            })
            .catch(error =>console.log(error));
    }
    render() {
        const {product} = this.state;

        return (
            <View style={styles.container}>
                <Text> textInComponent </Text>
                <Text> {product.name} </Text>
                <Text>  {product.price} </Text>
                <Text>  {product.description} </Text>
                {product.image.length>0 &&<Image source={{uri:product.image}} style={styles.image} />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image:{
        height:200,
        width:200,
    }
})
