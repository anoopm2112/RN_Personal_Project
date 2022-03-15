import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { dimensionUtils } from '../utils';

const { convertWidth } = dimensionUtils;

const DropDownField = ({ dropDownData }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    return (
        <View style={styles.dropDownView}>
            <Picker
                mode={'dropdown'}
                style={styles.dropDownView}
                selectedValue={selectedLanguage}
                onValueChange={(itemValue) =>
                    setSelectedLanguage(itemValue)
                }>
                <Picker.Item label="Select an option" value="option" />
                {dropDownData != undefined && dropDownData.map(option =>
                    <Picker.Item key={option.id} label={option.name} value={option.id} />)}
            </Picker>
        </View>
    );
}

const styles = StyleSheet.create({
    dropDownView: {
        borderColor: 'black',
        borderWidth: convertWidth(1),
        borderRadius: convertWidth(5),
    }
});

export default DropDownField;