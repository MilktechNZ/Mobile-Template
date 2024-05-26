import React from 'react'
import {View, Image} from 'react-native'
import Logo from '../assets/img/splash.png'

const Header = () => {
    const styleView = {
        backgroundColor: 'white',
        width: '100%',
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }

    return (
        <View style={styleView}>
            <Image source={Logo} />
        </View>
    )
}

export default Header