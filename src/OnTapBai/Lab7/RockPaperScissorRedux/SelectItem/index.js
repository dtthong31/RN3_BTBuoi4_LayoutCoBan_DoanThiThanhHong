import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { userSelectAcion } from '../../redux/actions/gameActions';

 class SelectItem extends Component {

    render() {
        const { selectItem, selected } = this.props;
        return (
            <TouchableOpacity 
            style={[styles.cotainer, selected && styles.selectedItem]} 
            onPress={()=>this.props.userSelect(selectItem)}>
                <Image style={styles.selectImg} source={selectItem.image} />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    cotainer: {
        width: 70,
        height: 70,
        backgroundColor: 'rgba(0,0,0,0.5)',

        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
    },
    selectedItem: {
        borderWidth: 2,
        borderColor: '#ffff00',
    }
    , selectImg: {
        width: 50,
        height: 50,
    }
})
const mapDispatchToProps= dispatch=>{
    // console.log(dispatch);
    return{
        userSelect: (playerSelect)=>{
            dispatch(userSelectAcion(playerSelect));
        }
    }
}
export default connect(null,mapDispatchToProps)(SelectItem);
