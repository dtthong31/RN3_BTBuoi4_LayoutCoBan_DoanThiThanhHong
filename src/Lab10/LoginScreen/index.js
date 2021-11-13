import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { LinearTextGradient } from 'react-native-text-gradient'
import Antd from 'react-native-vector-icons/AntDesign'
import Text from '../../Excercise/BTVN_Buoi12/components/Text'
import ButtonIcon, { fontIcon } from '../components/ButtonIcon'
import TextInput from '../components/TextInput'
export default class LoginScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.styleButton}>
                    <TouchableOpacity activeOpacity={1} style={styles.btn} onPress={this.props.navigateToOnBoardScreen} >
                        <Antd name='left' size={30} color='white' />
                    </TouchableOpacity>
                </View>
                <View style={styles.formContent}>
                    <View style={styles.formHeader}>
                        <LinearTextGradient
                            colors={['#e05568', '#ae8194', '#9e9bb5']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            locations={[0, 0.7, 0.9]}
                        >
                            <Text style={styles.styleTextHeader}>Login</Text>
                        </LinearTextGradient>
                        <Text style={{ fontSize: 15, marginTop: 10 }}>Glad to see you back!</Text>
                    </View>
                    <View>
                        <TextInput placeholder={"Email address"} />
                        <TextInput placeholder={"Password"} />
                    </View>
                    <View style={styles.formFooter}>
                        <Text style={{ color: '#rgba(255,255,255, 0.5)' }}>Forgot Password?</Text>
                        <ButtonIcon style={styles.styleButtonIcon}  name={"arrowright"} size={30} color={"white"} />
                    </View>
                </View>
                <View style={styles.iconNav} >
                    <Text>or login with</Text>
                    <View style={{flexDirection:'row',marginTop:20,}}>
                        <ButtonIcon style={styles.styleButtonIcon} font={fontIcon.fontAwesome} name={"twitch"} size={30} color={"white"} />
                        <ButtonIcon style={styles.styleButtonIcon} font={fontIcon.fontisto} name={"discord"} size={30} color={"white"} />
                        <ButtonIcon style={styles.styleButtonIcon}  name={"google"} size={30} color={"white"} />
                        <ButtonIcon style={styles.styleButtonIcon}  name={"apple1"} size={30} color={"white"} />
                    </View>
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        paddingHorizontal: 20,
    },
    styleButtonIcon: {
        
        width: 70,
        height: 60,
        borderWidth: 1,
        marginHorizontal:10,
        borderColor: 'rgba(255,255,255, 0.5)',
    },
    styleButton: {
        // flex:1,
        marginTop: 30,
        width: 35.5,
        height: 35,
        backgroundColor: '#fff',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btn: {
        width: 34.5,
        height: 34.5,
        backgroundColor: '#040305',
        borderRadius: 5,
        borderWidth: 0.5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    styleTextHeader: {
        backgroundColor: 'transparent',
        color: "rgb(250,92,92)",
        fontSize: 40,
        fontWeight: '800',
    },
    formContent: {
        flex: 4,
        justifyContent: 'center'
    }
    , formHeader: {
        marginBottom: 30
    },
    formFooter: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    iconNav: {
        flex: 0.75,
        alignItems: 'center'
    }

})

