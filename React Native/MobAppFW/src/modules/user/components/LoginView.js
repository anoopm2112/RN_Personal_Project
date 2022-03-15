import React, { useRef, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ActivityIndicator, SafeAreaView } from 'react-native';
import { Formik } from 'formik';
import * as yup from 'yup';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { components, utils } from '../../../common';
import COLORS from '../../../common/constants/colorConst';

const { Item, Icon, Button, ErrorText } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const LoginView = (props) => {
    const { authenticate, user: { login }, navigateToRegister } = props;
    const [eyeVisible, setEyeVisible] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

    const loginValidationSchema = yup.object().shape({
        username: yup
            .string()
            .required('Please enter username'),
        password: yup
            .string()
            .required('Please enter password')
    });

    const passwordInputRef = useRef();
    const loginButtonRef = useRef();

    const eyeVisibleFun = () => {
        setEyeVisible(false);
        setSecureTextEntry(true)
    }

    const eyeHideVisible = () => {
        setEyeVisible(true);
        setSecureTextEntry(false)
    }

    return (
        <Formik
            validationSchema={loginValidationSchema}
            initialValues={{ username: '', password: '' }}
            onSubmit={authenticate}
        >
            {({ handleChange, handleSubmit, errors, values }) => {
                return (
                    <SafeAreaView style={{ flex: 1 }}>
                        <KeyboardAwareScrollView keyboardShouldPersistTaps='handled' showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: COLORS.WHITE, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{ marginTop: convertHeight(50), width: convertWidth(315) }}>
                                <Text style={{ fontSize: 27, fontWeight: 'bold', color: COLORS.BLACK }}>Welcome, </Text>
                                <Text style={{ fontSize: 19, fontWeight: 'bold', color: COLORS.SIDEBAR }}>Sign in to continue</Text>
                            </View>

                            <View style={{ marginTop: convertHeight(30) }}>
                                <Item regular>
                                    <Icon type="FontAwesome" active name='user' style={{ paddingLeft: 10, fontSize: 26 }} />
                                    <TextInput
                                        returnKeyType='next'
                                        onSubmitEditing={() => passwordInputRef.current.focus()}
                                        onChangeText={handleChange('username')}
                                        value={values.username}
                                        placeholder='Email / Phone Number' />
                                </Item>
                                <ErrorText errorMsg={errors.username} />
                                <Item regular>
                                    <Icon type="FontAwesome5" active name='lock' style={{ paddingLeft: 10, fontSize: 22 }} />
                                    <TextInput
                                        returnKeyType='done'
                                        ref={passwordInputRef}
                                        secureTextEntry={secureTextEntry}
                                        onChangeText={handleChange('password')}
                                        value={values.password}
                                        placeholder='Password'
                                        style={{ width: convertWidth(230) }} 
                                        onSubmitEditing={() => { loginButtonRef.current.props.onPress() }} />
                                    {eyeVisible ?
                                        <TouchableOpacity onPress={eyeVisibleFun}>
                                            <Icon type="Entypo" name={'eye-with-line'} style={styles.rightIcon} />
                                        </TouchableOpacity> :
                                        <TouchableOpacity onPress={eyeHideVisible}>
                                            <Icon type="Entypo" name={'eye'} style={styles.rightIcon} />
                                        </TouchableOpacity>}
                                </Item>
                                <ErrorText errorMsg={errors.password} />
                                <Button ref={loginButtonRef}
                                    style={[styles.loginBtn, { backgroundColor: login.isAuthenticating ? COLORS.BORDER : COLORS.PRIMARY }]} 
                                    onPress={handleSubmit}>
                                    {login.isAuthenticating ?
                                        <ActivityIndicator size={'small'} animating={login.isAuthenticating} color={COLORS.WHITE} /> :
                                        <Text style={styles.buttonText}>SIGN IN</Text>}
                                </Button>
                                <View style={styles.signUpContainer}>
                                    <Text style={{ color: COLORS.PRIMARY, fontWeight: 'bold' }}>Don`t have an account ?</Text>
                                    <TouchableOpacity onPress={navigateToRegister}>
                                        <Text style={{ color: COLORS.PRIMARY, fontWeight: 'bold', fontStyle: 'italic' }}> Sign up</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAwareScrollView>
                    </SafeAreaView>
                )
            }}
        </Formik>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: convertWidth(10),
        marginVertical: convertHeight(10),
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: convertHeight(20)
    },
    signUpContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'center',
        marginTop: convertHeight(30)
    },
    loginBtn: {
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: convertHeight(20),
        width: convertWidth(320)
    },
    rightIcon: {
        fontSize: convertHeight(29),
        color: COLORS.SIDEBAR,
    },
});

export default LoginView;