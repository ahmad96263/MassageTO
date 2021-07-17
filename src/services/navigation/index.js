import React from 'react'
import { View, Text, Button } from 'react-native'
import Home from '../../screens/authflow/home'
import Contactlist from '../../screens/authflow/contactlist'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()
const MainStack = createStackNavigator()


const AppStackScreens = () => {

    return (
        <AppStack.Navigator
            screenOptions={{
                //headerShown: false
            }}
        >
            <AppStack.Screen name="home" component={Home}
                options={{
                    title: "All Contacts",
                    headerTitleAlign: 'center',
                  //  headerRight:()=><Text>Add</Text>
                }}
            />
            <AppStack.Screen name="addContact" component={Contactlist}
                options={{
                    title: 'Add Contact',
                    headerTitleAlign: 'center'
                }}
            />




        </AppStack.Navigator>
    )
}
const navigation = () => {
    return (
        <NavigationContainer>
            <MainStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="app"
            >
                <MainStack.Screen name="app" component={AppStackScreens} />
            </MainStack.Navigator>
        </NavigationContainer>
    );
}

export default navigation;