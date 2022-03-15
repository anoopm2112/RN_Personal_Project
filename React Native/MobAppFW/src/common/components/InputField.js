import React from 'react';
import { Input, Item } from 'native-base';

import { ErrorText } from '../components';

const InputField = ({ placeholder, onChangeText, value, errors, autoCapitalize }) => {
    const dangerLine = errors != undefined ? errors.includes(errors) : false;

    return (
        <>
            <Item error={dangerLine}>
                <Input
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    value={value}
                    autoCapitalize={autoCapitalize}
                />
            </Item>
            <ErrorText errorMsg={errors && errors} />
        </>
    );
}

export default InputField;