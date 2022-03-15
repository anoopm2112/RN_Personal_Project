import React from "react";
import {
    View, Text, TouchableOpacity, Animated, ScrollView, Dimensions, StyleSheet, TextInput,
    FlatList,
    StatusBar
} from "react-native";
import { components, utils } from '../../../common';
import { Card, Picker } from 'native-base';
import COLORS from "../../../common/constants/colorConst";

import { showNotification } from '../../../notification.android';

const { DashboardHeader, Button } = components;
const { width } = Dimensions.get("window");

export default class App extends React.Component {
    state = {
        active: 0,
        xTabOne: 0,
        xTabTwo: 0,
        translateX: new Animated.Value(0),
        translateXTabOne: new Animated.Value(0),
        translateXTabTwo: new Animated.Value(width),
        translateY: -1000,
        selected: ''
    };

    onValueChange(value) {
        this.props.getDistrict({ district_id: value });
    }

    handleSlide = type => {
        let { active, translateX, translateXTabOne, translateXTabTwo } = this.state;
        Animated.spring(translateX, {
            useNativeDriver: true,
            toValue: type,
            duration: 100
        }).start();
        if (active === 0) {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    useNativeDriver: true,
                    toValue: 0,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    useNativeDriver: true,
                    toValue: width,
                    duration: 100
                }).start()
            ]);
        } else {
            Animated.parallel([
                Animated.spring(translateXTabOne, {
                    useNativeDriver: true,
                    toValue: -width,
                    duration: 100
                }).start(),
                Animated.spring(translateXTabTwo, {
                    useNativeDriver: true,
                    toValue: 0,
                    duration: 100
                }).start()
            ]);
        }
    };

    componentDidMount() {
        this.props.getState();
    }

    render() {
        let { navigation, navigateRegister, searchByPincode, stateList: { data }, districtsList: { districtsData }, findByDistricts } = this.props;
        let { xTabOne, xTabTwo, translateX, active, translateXTabOne, translateXTabTwo, translateY } = this.state;
        return (
            <>
                <DashboardHeader title={'VACCINE'} navigation={navigation} />
                <StatusBar barStyle="dark-content" backgroundColor="#FFF" />
                <View style={{ flex: 1, backgroundColor: '#FFF' }}>
                    <View style={styles.mainContainer}>
                        <View style={styles.container}>
                            <Animated.View style={[styles.tab1View, { transform: [{ translateX }] }]} />
                            <TouchableOpacity style={styles.tab1btn}
                                onLayout={event => this.setState({ xTabOne: event.nativeEvent.layout.x })}
                                onPress={() => this.setState({ active: 0 }, () => this.handleSlide(xTabOne))}>
                                <Text style={{ color: active === 0 ? "#fff" : "#007aff" }}>By Pincode</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.tab2btn} onLayout={event => this.setState({ xTabTwo: event.nativeEvent.layout.x })}
                                onPress={() => this.setState({ active: 1 }, () => this.handleSlide(xTabTwo))}>
                                <Text style={{ color: active === 1 ? "#fff" : "#007aff" }}>By State & Country</Text>
                            </TouchableOpacity>
                        </View>

                        <Animated.View style={{
                            transform: [{ translateX: translateXTabOne }]
                        }} onLayout={event => this.setState({ translateY: event.nativeEvent.layout.height })}>
                            <View style={{ marginTop: 7 }}>
                                <TextInput
                                    placeholder='Eg: 689693'
                                    style={{ borderWidth: 1, borderColor: '#D6D6D6', borderRadius: 5, marginVertical: 5, paddingLeft: 10 }}
                                />
                                <Button full style={{ borderRadius: 5, marginTop: 5, backgroundColor: COLORS.PRIMARY }} onPress={searchByPincode}>
                                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SEARCH</Text>
                                </Button>
                            </View>
                        </Animated.View>

                        <Animated.View style={{
                            transform: [{ translateX: translateXTabTwo }, { translateY: -translateY }]
                        }}>
                            <View style={{ marginTop: 7 }}>
                                <View style={{ borderWidth: 1, borderColor: '#D6D6D6', borderRadius: 5, marginVertical: 5 }}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={{ width: '100%' }}
                                        selectedValue={this.state.selected}
                                        onValueChange={this.onValueChange.bind(this)}
                                    >
                                        {data.map((item, key) => (
                                            <Picker.Item label={item.state_name} value={item.state_id} key={key} />)
                                        )}
                                    </Picker>
                                </View>
                                <View style={{ borderWidth: 1, borderColor: '#D6D6D6', borderRadius: 5, marginVertical: 5 }}>
                                    <Picker
                                        note
                                        mode="dropdown"
                                        style={{ width: '100%' }}
                                    // selectedValue={this.state.selected}
                                    // onValueChange={this.onValueChange.bind(this)}
                                    >
                                        {districtsData.map((item, key) => (
                                            <Picker.Item label={item.district_name} value={item.district_id} key={key} />)
                                        )}
                                    </Picker>
                                </View>
                                <Button full style={{ borderRadius: 5, marginTop: 5, backgroundColor: COLORS.PRIMARY }}
                                    onPress={findByDistricts}>
                                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SEARCH</Text>
                                </Button>
                                <Button full style={{ borderRadius: 5, marginTop: 5, backgroundColor: COLORS.PRIMARY }} onPress={navigateRegister}>
                                    <Text style={{ color: '#FFF', fontWeight: 'bold' }}>ADD PINCODE</Text>
                                </Button>
                            </View>
                        </Animated.View>
                    </View>
                    <Button full style={{ borderRadius: 5, marginTop: 5, backgroundColor: COLORS.PRIMARY }} 
                        onPress={() => showNotification('hello', 'message')}>
                        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>SEND LOCAL NOTIFICATION</Text>
                    </Button>
                </View >
            </>
        );
    }
}

const styles = StyleSheet.create({
    mainContainer: {
        width: "90%",
        marginLeft: "auto",
        marginRight: "auto"
    },
    container: {
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 20,
        height: 36,
        position: "relative"
    },
    tab1View: {
        position: "absolute",
        width: "50%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: "#007aff",
        borderRadius: 4
    },
    tab1btn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#007aff",
        borderRadius: 4,
        borderRightWidth: 0,
        borderTopRightRadius: 0,
        borderBottomRightRadius: 0
    },
    tab2btn: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "#007aff",
        borderRadius: 4,
        borderLeftWidth: 0,
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0
    }
});