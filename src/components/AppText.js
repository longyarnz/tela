import React from 'react';
import { Text } from 'react-native';

const AppText = props => {
    const style = {
        fontFamily: 'Montserrat-Light',
        fontWeight: (props.style && props.style.fontWeight) || '300',
        fontSize: (props.style && props.style.fontSize) || 16
    };

    return (
        <Text style={[style, props.style]}>{props.children}</Text>
    );
}

export default AppText