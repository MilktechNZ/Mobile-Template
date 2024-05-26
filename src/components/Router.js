import React from 'react';
import {useColorScheme} from 'react-native'
import Colors from '../styles/Colors'
import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

import Home from '../pages/Home'
import Page2 from '../pages/Page2'

const Stack = createNativeStackNavigator()

const Router = () => {
    const isDarkMode = useColorScheme() === 'dark'

    const style = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.MTBlue,
        color: isDarkMode ? Colors.white : Colors.white,
        flex: 1,
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={Home} options={{headerStyle: {backgroundColor: style.backgroundColor}, headerTitleStyle:{color: style.color}, headerTintColor: style.color, headerShown: false}} />
                <Stack.Screen name="Page 2" component={Page2} options={{headerStyle: {backgroundColor: style.backgroundColor}, headerTitleStyle:{color: style.color}, headerTintColor: style.color, headerBackButtonMenuEnabled: true, headerBackVisible: true}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Router
