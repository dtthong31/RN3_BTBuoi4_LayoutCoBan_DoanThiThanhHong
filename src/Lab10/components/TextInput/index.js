import React, { Component } from 'react'
import { TextInput as RNTextInput, StyleSheet, View } from 'react-native'
import Text from '../../../Excercise/BTVN_Buoi12/components/Text'
export default class TextInput extends Component {
    state={
        focusInput:false,
    }
    // onBlur=()=>{
    //     if(this.props.onBlur){
    //         this.props.onBlur();
    //     }
    //     this.setState({focusInput:false});
    // }
    // onFocus=()=>{
    //     this.setState({focusInput:true});
    // }
    render() {
        const { style, errorText } = this.props;
        // console.log(errorText);
        return (
            <>
                <RNTextInput
                    placeholderTextColor='#rgba(255,255,255, 0.5)'
                    {...this.props}
                    // onFocus={this.onFocus}
                    // onBlur={this.onBlur}
                    style={[
                        styles.styleTextInput,
                        errorText && styles.styleError,
                        this.state.focusInput && styles.styleFocus,style,
                    ]}
                    
                />
                {!!errorText && <Text>{errorText}</Text>}
            </>
        )
    }
}

const styles = StyleSheet.create({
    styleTextInput: {
        backgroundColor: '#19191f',
        height: 50,
        paddingHorizontal: 15,
        borderRadius: 8,
        color: '#fff',
        marginTop: 20,
        marginBottom: 5,
    },
    styleError: { borderColor: 'red', borderWidth: 1 },
    styleFocus: { borderColor: 'green', borderWidth: 1 }
    ,
})
