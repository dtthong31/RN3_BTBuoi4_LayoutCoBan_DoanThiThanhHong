import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { connect } from 'react-redux';
import SelectItem from '../SelectItem'
class SelectContent extends Component {
    rederSelectItem = () => {
        return this.props.listSelect.map(selectItem => (
            <SelectItem
                key={selectItem.id}
                selectItem={selectItem}
                selected={selectItem.id === this.props.playerSelectItem} />
        ))
    };
    render() {
        return this.rederSelectItem();
    }
}

const styles = StyleSheet.create({})
const mapStateToProps = (state) => {
    return {
        listSelect: state.gameReduces.listSelect,
        playerSelectItem: state.gameReduces.playerSelect.id,
    };
}

export default connect(mapStateToProps)(SelectContent);