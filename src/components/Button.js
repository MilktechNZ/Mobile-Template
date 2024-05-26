import React from 'react'
import {useColorScheme, View, Text, TouchableOpacity} from 'react-native'
import Colors from '../styles/Colors'

const ButtonView = ({style, type, variant, text, callback, children}) => {
    type = type ?? "primary"
    variant = variant ?? "filled"
    text = text ?? "Button"
    const isDarkMode = useColorScheme() === 'dark'
    const _style = {
        primary: {
            filled: {
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 10,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: Colors.MTBlue,
                color: 'white',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 5,
                fontSize: 18,
                fontWeight: 'bold',
            },
            outlined: {
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 10,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: isDarkMode ? Colors.white : Colors.white,
                color: Colors.MTBlue,
                borderWidth: 2,
                borderColor: Colors.MTBlue,
                borderRadius: 5,
                fontSize: 18,
                fontWeight: 'bold',
            }
        },
        secondary: {
            filled: {
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 10,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: Colors.MTGrey,
                color: 'white',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 5,
                fontSize: 18,
                fontWeight: 'bold',
            },
            outlined: {
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                padding: 10,
                marginTop: 5,
                marginBottom: 5,
                backgroundColor: isDarkMode ? Colors.dark : Colors.white,
                color: 'white',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 5,
                fontSize: 18,
                fontWeight: 'bold',
            }
        },
    }
    return (
        <TouchableOpacity onPress={callback}>
            <View style={_style[type][variant]}>
                <Text style={{fontSize: _style[type][variant].fontSize, color: _style[type][variant].color, fontWeight: _style[type][variant].fontWeight}}>
                    {children ?? text}
                </Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonView