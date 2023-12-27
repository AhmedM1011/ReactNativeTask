import React from 'react';
import { Text, TextInput, View } from 'react-native';

const CustomTextInput = ({
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    error,
    secureTextEntry,
}) => {
    return (
        <View style={ { marginBottom: 10 } }>
            <TextInput
                placeholder={ placeholder }
                placeholderTextColor={ placeholderTextColor }
                value={ value }
                onChangeText={ onChangeText }
                secureTextEntry={ secureTextEntry }
                style={ {
                    borderWidth: 1,
                    borderColor: error ? 'red' : 'gray',
                    borderRadius: 5,
                    padding: 10,
                    color: 'black',
                } }
            />
            { error !== '' && <Text style={ { color: 'red' } }>{ error }</Text> }
        </View>
    );
};

export default CustomTextInput;
