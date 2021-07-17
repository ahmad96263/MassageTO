import React from 'react'
import { View, Text, Button } from 'react-native'


function Home(props) {
    const { navigate } = props.navigation
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Contactlist Screen</Text>
            <Button
                title="Go to home"
                onPress={() => navigate('home')}
            />
        </View>
    )
}
export default Home