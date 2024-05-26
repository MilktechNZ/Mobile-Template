import React from 'react'
import {useColorScheme, SafeAreaView} from 'react-native'
import Colors from './Colors'

const Layout = ({ children, style = {} }) => {
    const isDarkMode = useColorScheme() === 'dark'

    const _style = {
        backgroundColor: isDarkMode ? Colors.dark : Colors.white,
        color: isDarkMode ? Colors.white : Colors.black,
        flex: 1,
    }
    for( const [key, value] of Object.entries(style) ) {
        _style[key] = value
    }

    return (
        <SafeAreaView style={_style}>
            {children}
        </SafeAreaView>
    )
}

export default Layout