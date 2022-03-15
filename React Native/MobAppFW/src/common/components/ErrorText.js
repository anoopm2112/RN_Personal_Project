import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { dimensionUtils } from '../utils';
import COLORS from '../constants/colorConst';

const { convertHeight, convertWidth } = dimensionUtils

const ErrorText = ({errorMsg}) => (
    <Text style={styles.errorText}>{errorMsg}</Text>
);

const styles = StyleSheet.create({
    errorText: {
        fontStyle: 'italic',
        fontSize: convertHeight(14),
        textAlign: 'justify',
        color: COLORS.DANGER,
        width: convertWidth(300)
    }
});

export default ErrorText;