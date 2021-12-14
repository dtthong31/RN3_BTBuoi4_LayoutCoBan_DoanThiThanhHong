import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import React, { Component } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, TouchableOpacity, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { LinearTextGradient } from 'react-native-text-gradient';
import Antd from 'react-native-vector-icons/AntDesign';
import Text from '../../Excercise/BTVN_Buoi12/components/Text';
import ButtonIcon, { fontIcon } from '../components/ButtonIcon';
import TextInput from '../components/TextInput';
import { Formik } from 'formik';
import * as Yup from 'yup';

const validateSchema = Yup.object().shape({
    email: Yup.string().email('Email khong hop le').required('Truong nay bat buoc nhap thong tin'),
    password: Yup.string().min(5, 'Passwork toi thieu 5 ki tu').required('Truong nay bat buoc nhap thong tin'),
})
export default class LoginScreen extends Component {
    state = {
       email: '',
        password: '',
    }
    // onChangeText = (text, type) => {
    //     this.setState({ [type]: text });
    //     // console.log(`${type} : ${text}`);
    // }
    submitFormLogin = async (email, password) => {
        return await axios({
            method: 'post',
            url: 'http://svcy3.myclass.vn/api/Users/signin',
            data: {
                email,
                password
            }
        });
    }
    componentDidMount() {
        this.saveEmailToInput();
    }
    getItem = async () => {
        try {
            const result = await AsyncStorage.getItem('useEmail');
            // console.log(result);
            return result;
        } catch (e) {
            console.log(e);
        }
    }

    saveEmailToInput = async () => {
        const email = await this.getItem();
        
        if (email) {
            this.setState({ email },()=>console.log('emailGet', this.state.email));
            
        }
    }
    // onBlur = () => {
    //     const { email, password, emailError, passwordError } = this.state;
    //     const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    //     // console.log(regexEmail.test('hong@gmail.com'));
    //     if (!regexEmail.test(email)) {
    //         this.setState({ emailError: 'Email khong hop le' });
    //     } else {
    //         this.setState({ emailError: '' });
    //     }
    //     if (!(password.trim().length > 7)) {
    //         this.setState({ passwordError: 'Password lớn hơn 7 kí tự' });
    //     } else {
    //         this.setState({ passwordError: '' });
    //     }
    // }
    onSubmit = async({email, password}) => {
        try {
            const result = await this.submitFormLogin(email, password);
            await AsyncStorage.setItem('useEmail', result?.data?.content?.email);
            // console.log("email", result?.data?.content?.email);
        } catch (error) {
            console.log(error);
        }
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.container}>
                    <View style={styles.styleButton}>
                        <TouchableOpacity activeOpacity={1} style={styles.btn} onPress={this.props.navigateToOnBoardScreen} >
                            <Antd name='left' size={30} color='white' />
                        </TouchableOpacity>
                    </View>
                    <Formik
                        initialValues={this.state.email,this.state.password}
                        onSubmit={this.onSubmit}
                        validationSchema={validateSchema}
                    >
                        {({  values,errors, handleChange, handleSubmit }) => (
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
                                    <TextInput
                                        placeholder={"Email address"}
                                        onChangeText={handleChange('email')}
                                        value={values.email}
                                        errorText={errors.email}
                                    // onBlur={this.onBlur}
                                    />
                                    <TextInput placeholder={"Password"}
                                        secureTextEntry={true}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        errorText={errors.password}
                                    />
                                </View>
                                <View style={styles.formFooter}>
                                    <Text style={{ color: '#rgba(255,255,255, 0.5)' }}>Forgot Password?</Text>
                                    <ButtonIcon
                                        style={styles.styleButtonIcon}
                                        onPress={handleSubmit}
                                        name={"arrowright"}
                                        size={30}
                                        color={"white"} />
                                </View>
                            </View>
                        )}

                    </Formik>
                    <View style={styles.iconNav} >
                        <Text>or login with</Text>
                        <View style={{ flexDirection: 'row', marginTop: 20, }}>
                            <ButtonIcon style={styles.styleButtonIcon}
                                font={fontIcon.fontAwesome}
                                name={"twitch"}
                                size={30}
                                color={"white"} />
                            <ButtonIcon
                                style={styles.styleButtonIcon}
                                font={fontIcon.fontisto}
                                name={"discord"}
                                size={30}
                                color={"white"} />
                            <ButtonIcon style={styles.styleButtonIcon}
                                name={"google"}
                                size={30}
                                color={"white"} />
                            <ButtonIcon
                                style={styles.styleButtonIcon}
                                name={"apple1"}
                                size={30}
                                color={"white"} />
                        </View>
                    </View>
                </View>
            </SafeAreaView>
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
        marginHorizontal: 10,
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

