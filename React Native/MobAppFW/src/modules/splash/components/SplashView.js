import React, { useEffect } from 'react';
import { View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const SplashView = (props) => {
    useEffect(() => {
        SplashScreen.hide();
    }, []);

    return (
        <View />
    );
}

export default SplashView;