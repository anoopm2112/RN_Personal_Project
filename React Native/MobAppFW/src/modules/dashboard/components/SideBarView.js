import React, { useCallback } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import COLORS from '../../../common/constants/colorConst';
import { components, utils } from '../../../common';
import { ROUTE_KEYS as DASHBOARD_ROUTE_KEYS } from '../../dashboard/constants';

const { Content, Icon } = components;
const { dimensionUtils: { convertHeight, convertWidth } } = utils;

const SideBarView = (props) => {

    const routes = useCallback(() => {
        let key = 0;
        return [
            {
                key: key++,
                title: 'Home',
                drawerIcon: () => <Icon type="FontAwesome" name="home" style={styles.sideBarIcon} />,
                name: DASHBOARD_ROUTE_KEYS.HOME,
                params: {}
            },
            {
                key: key++,
                title: 'Logout',
                drawerIcon: () => <Icon type="MaterialCommunityIcons" name="logout-variant" style={styles.sideBarIcon} />,
                onPress: props.logout
            },
        ]
    });

    const onItemSelect = (route) => {
        if (route.name) {
            props.navigation.navigate(route.name, { ...route.params });
            props.navigation.closeDrawer();
        } else {
            route.onPress();
        }
    }

    const createDrawerItemForRoute = (route) => {
        return (
            <DrawerItem
                style={{ borderBottomColor: COLORS.PRIMARY, borderBottomWidth: 0.4 }}
                key={route.key}
                label={route.title}
                labelStyle={{ fontWeight: 'bold' }}
                icon={route.drawerIcon}
                onPress={() => onItemSelect(route)}
            />
        );
    }

    return (
        <DrawerContentScrollView {...props} style={{ backgroundColor: COLORS.WHITE }}>
            <View style={styles.headerSection}>
                <View style={{ flexDirection: 'row', marginTop: 40 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.SIDEBAR }}>TREAT</Text>
                    <Text style={{ fontWeight: 'bold', fontSize: 22, color: COLORS.PRIMARY }}>WISE</Text>
                </View>
            </View>
            <Content>
                {routes().map(createDrawerItemForRoute)}
            </Content>
        </DrawerContentScrollView>

    );
}

const styles = StyleSheet.create({
    headerSection: {
        height: convertHeight(150),
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: COLORS.WHITE
    },
    sideBarIcon: {
        fontSize: convertHeight(29),
        color: COLORS.PRIMARY
    }
});

export default SideBarView;