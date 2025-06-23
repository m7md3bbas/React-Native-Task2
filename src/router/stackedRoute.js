import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import Home from '../screens/home';


const { Navigator, Screen } = createNativeStackNavigator();

const StackedRoute = () => {
    return (
        <Navigator>
            <Screen name='Home' component={Home} options={{ headerShown: false }} />
        </Navigator>
    )
}

export default StackedRoute