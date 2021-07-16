import React from 'react'
import {View,Text, Button} from 'react-native'
import Home from '../../screens/authflow/home'
import Contactlist from '../../screens/authflow/contactlist'
import {NavigationContainer} from '@react-navigation/native'
import{createStackNavigator} from '@react-navigation/stack'

const AuthStack = createStackNavigator()

const AuthStackScreens =() =>{

    return(
        <AuthStack.Navigator 
        screenOptions={{
            headerShown:false
        }}
        >
            <AuthStack.Screen name="home" component={Home}/>
            <AuthStack.Screen name="contactlist" component={Contactlist}/>

            


        </AuthStack.Navigator>
    )
}
const navigation = () => {
    return (
        <NavigationContainer>
            <AuthStack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName="auth"
            >
                <AuthStack.Screen name="auth" component={AuthStackScreens} />
               
            </AuthStack.Navigator>


        </NavigationContainer>
    );
}

export default navigation;