import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import completedTasks from '../screens/completedTasks'
import { AntDesign } from '@expo/vector-icons'
import StackedRoute from './stackedRoute'
const { Navigator, Screen } = createBottomTabNavigator();
const Router = () => {
    const myStyle = {
        headerTitleAlign: 'center',
        tabBarStyle: {
            position: 'absolute',
            backgroundColor: '#000',
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            bottom: 30,
            width: "90%",
            marginLeft: "5%",
        }
    };

    return (
        <NavigationContainer>
            <Navigator screenOptions={
                {
                    ...myStyle
                }
            }>
                <Screen name='Home' component={StackedRoute} options={{
                    tabBarIcon: ({ focused }) => <AntDesign name="home" size={24} color={focused ? "green" : "white"} />,
                    tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "green" : "white", fontSize: 12 }}>Home</Text>,
                }} />
                <Screen name='Completed' component={completedTasks} options={{

                    tabBarIcon: ({ focused }) => <AntDesign name="bars" size={24} color={focused ? "green" : "white"} />,
                    tabBarLabel: ({ focused }) => <Text style={{ color: focused ? "green" : "white", fontSize: 12 }}>Completed</Text>,
                }} />
            </Navigator>
        </NavigationContainer>
    )
}

export default Router