import React from "react";
import {
    View, Text, TouchableOpacity, Animated, ScrollView, Dimensions, StyleSheet, TextInput,
    FlatList
} from "react-native";
import { components, utils } from '../../../common';
import { Card } from 'native-base';

const { CustomHeader, Button } = components;

const VaccineListView = (props) => {
    const { sessions } = props.route.params.data;

    const renderItem = ({ item }) => {
        return (
            <Card style={{ padding: 7 }}>
                <Text>{item.name}</Text>
                <Text>{item.address ? item.address : 'No address available'}</Text>
                <Text>{item.block_name}</Text>
                <Text>{item.fee_type}</Text>
                <Text>{item.vaccine}</Text>
            </Card>
        );
    }

    return (
        <>
            <CustomHeader title={'VACCINE LIST'} />
            <View style={{ paddingHorizontal: 7, flex: 1, backgroundColor: '#FFF' }}>
                <FlatList
                    data={sessions}
                    renderItem={(item) => renderItem(item)}
                    keyExtractor={(item) => item.center_id}
                />
            </View>
        </>
    )
}

export default VaccineListView;