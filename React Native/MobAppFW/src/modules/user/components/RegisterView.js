import React, { useState } from 'react';
import { View, Text, StyleSheet, Modal, TouchableOpacity, Animated, TextInput } from 'react-native';
import { Button, Icon } from 'native-base';


const ModalPopup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}>
            <View style={style.modalBackgroundColor}>
                <Animated.View style={[style.modalContainer,
                { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
}

const RegisterView = (props) => {
    const [visible, setVisible] = React.useState(false);
    const [textdata, setText] = React.useState('');

    const { yourPincode } = props;

    const addPincode = () => {
        setVisible(false);
        setText('');
        yourPincode(textdata);
    }

    return (
        <View style={style.mainContainer}>
            <ModalPopup visible={visible}>
                <View style={{ alignItems: 'center' }}>
                    <View style={style.header}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Icon type="AntDesign" name="closecircle" style={{ fontSize: 24 }} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingLeft: 3 }}>
                    <View style={{ borderWidth: 1, borderColor: '#000', borderRadius: 3 }}>
                        <TextInput
                            style={{ height: 40, marginLeft: 5 }}
                            placeholder="Enter your pincode"
                            onChangeText={text => setText(text)}
                            value={textdata}
                        />
                    </View>
                    <Button style={{ borderRadius: 5, marginTop: 7 }} full onPress={() => addPincode()}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>Add Pincode</Text>
                    </Button>
                </View>
                {/* <View style={{ alignItems: 'center' }}> */}
                {/* <LottieView source={require('../../../../assets/img/14533-tick-animation.json')} autoPlay loop /> */}
                {/* <Icon type="FontAwesome5" name="check-circle" style={{ fontSize: 44, marginVertical: 10 }} /> */}
                {/* </View> */}
                {/* <Text style={{ marginVertical: 30, fontSize: 20, textAlign: 'center' }}>Successfully Registered</Text> */}
            </ModalPopup>
            <Button style={{ width: 100, justifyContent: 'center', alignSelf: 'center' }}
                onPress={() => setVisible(true)}>
                <Text style={{ color: '#FFF' }}>Add Pincode</Text>
            </Button>
        </View>
    );
};

const style = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center'
    },
    modalBackgroundColor: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalContainer: {
        width: '80%',
        backgroundColor: '#FFF',
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20
    },
    header: {
        width: 250,
        height: 40,
        alignItems: 'flex-end',
        justifyContent: 'center'
    }
});

export default RegisterView;