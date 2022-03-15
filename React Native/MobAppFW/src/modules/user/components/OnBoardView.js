import React, { useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { utils } from '../../../common';
import COLORS from '../../../common/constants/colorConst';
import { Card } from 'native-base';

const { dimensionUtils: { convertWidth, convertHeight } } = utils;

const OnBoardView = (props) => {
    const { navigateToLogin, getCovidStatus, userCovidStatus: { covidStatusData }, usercovidStatusRate } = props;
    console.log('sss', usercovidStatusRate.covidStatusRate.overall_status);

    useEffect(() => {
        getCovidStatus();
    },[]);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: 30 }}>
                <Card style={{ width: '30%', height: 80, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ fontSize: 16, paddingTop: 7 }}>Confirmed</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 7 }}>{usercovidStatusRate?.covidStatusRate.overall_status?.confirmed}</Text>
                </Card>
                <Card style={{ width: '30%', height: 80, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ fontSize: 16, paddingTop: 7 }}>Deaths</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 7 }}>{usercovidStatusRate?.covidStatusRate.overall_status?.deaths}</Text>
                </Card>
                <Card style={{ width: '30%', height: 80, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ fontSize: 16, paddingTop: 7 }}>Recovered</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 7 }}>{usercovidStatusRate?.covidStatusRate.overall_status?.recovered}</Text>
                </Card>
            </View>
            {/* <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', paddingTop: 30 }}>
                <Card style={{ width: '30%', height: 80, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ fontSize: 16, paddingTop: 7 }}>Confirmed</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 7 }}>{usercovidStatusRate?.covidStatusRate.country_status[0].latest.confirmed}</Text>
                </Card>
                <Card style={{ width: '30%', height: 80, alignItems: 'center', borderRadius: 5 }}>
                    <Text style={{ fontSize: 16, paddingTop: 7 }}>Deaths</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, paddingTop: 7 }}>{usercovidStatusRate?.covidStatusRate.country_status[0].latest.deaths}</Text>
                </Card>
            </View> */}
            <View style={style.details}>
                <Text style={{ color: COLORS.BORDER, fontSize: convertHeight(35), fontWeight: 'bold' }}>Covid-19</Text>
                <Text style={{ color: COLORS.BLACK, fontSize: convertHeight(35), fontWeight: 'bold' }}>Vaccine checker</Text>
                <Text style={{ color: COLORS.BORDER, lineHeight: convertHeight(25), marginTop: convertHeight(15) }}>Please click below button to check vaccine</Text>
                <TouchableOpacity activeOpacity={0.8} onPress={navigateToLogin}>
                    <View style={style.btn}>
                        <Text style={{ fontWeight: 'bold', color: COLORS.WHITE }}>Check Vaccine</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const style = StyleSheet.create({
    details: {
        height: '50%',
        bottom: 0,
        position: 'absolute',
        paddingHorizontal: convertWidth(40),
    },
    btn: {
        height: convertHeight(50),
        width: convertWidth(120),
        backgroundColor: COLORS.PRIMARY,
        marginTop: convertHeight(20),
        borderRadius: 7,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
});

export default OnBoardView;