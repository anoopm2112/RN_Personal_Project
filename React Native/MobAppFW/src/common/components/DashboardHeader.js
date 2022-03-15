import React from 'react';
import { TouchableOpacity, StyleSheet, View, Text } from 'react-native';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { DrawerActions } from '@react-navigation/native';

import COLORS from '../constants/colorConst';
import { dimensionUtils } from '../utils';
import { Icon } from '../components';

const { convertHeight } = dimensionUtils;

const DashboardHeader = ({ title, toggleDrawer }) => {
    return (
        <View style={style.header}>
            <TouchableOpacity onPress={toggleDrawer}>
                <Icon type="MaterialIcons" name="sort" style={style.headerIcon} />
            </TouchableOpacity>
            <Text style={style.headerText}>{title}</Text>
            <Icon type="FontAwesome5" name="medrt" style={style.headerIcon} />
        </View>
    );
};

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

const mapStateToProps = createStructuredSelector({});

const mapDispatchToProps = (dispatch, ownProps) => ({
    toggleDrawer: () => ownProps.navigation.dispatch(DrawerActions.toggleDrawer())
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardHeader);