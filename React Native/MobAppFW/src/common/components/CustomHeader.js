import React from 'react';
import { connect } from 'react-redux';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Icon } from 'native-base';

import COLORS from '../constants/colorConst';
import { dimensionUtils } from '../utils';
import { navigation } from '../actions';

const { navigateBack } = navigation;
const { convertHeight } = dimensionUtils;

const CustomHeader = ({ navigateBack, title }) => {
    return (
        <View style={style.header}>
            <TouchableOpacity onPress={navigateBack}>
                <Icon type='Ionicons' name="chevron-back" style={{fontSize: 28, color: COLORS.PRIMARY}} />
            </TouchableOpacity>
            <Title style={style.headerText}>{title}</Title>
            <Icon type="FontAwesome5" name="medrt" style={style.headerIcon} />
        </View>
    );
}

const style = StyleSheet.create({
    header: {
        paddingVertical: 15,
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: COLORS.WHITE,
    },
    headerText: {
        fontWeight: 'bold',
        color: COLORS.PRIMARY,
        fontSize: convertHeight(18)
    },
    headerIcon: { 
        fontSize: convertHeight(28), 
        color: COLORS.PRIMARY 
    }
});

const mapDispatchToProps = dispatch => ({
    navigateBack: () => dispatch(navigateBack())
});

export default connect(null, mapDispatchToProps)(CustomHeader);