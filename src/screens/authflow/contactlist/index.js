import React, {useState} from 'react'
import { View, Text, Button,TextInput,StyleSheet } from 'react-native'
import { TextInputPrimary } from '../../../components/textinputs'



function Home(props) {
    const [email, setName] = useState('')
    const [password, setNo] = useState('')
    const { navigate } = props.navigation
    return (
        
        <View  style={{backgroundColor:'#E8EAED'}}>
            <View>
                <View>
                    <Text style={styles.place}>Name</Text>
                    <TextInput style={styles.input}
                    placeholder="abc"
                    value={email}
                    onChangeText={text => setName(text)}
                    />
                </View>
                <View>
                    <Text  style={styles.place}>Mobile No</Text>
                    <TextInput style={styles.input}
                    placeholder="00000000"
                    value={email}
                    onChangeText={text => setNo(text)}
                    />
                </View>
                <View>
                    <Text  style={styles.place}>Image url</Text>
                    <TextInput style={styles.input}
                    placeholder=""
                    
                    value={email}
                    onChangeText={text => setNo(text)}
                    />
                </View>
           
            </View>
            
            <Button style={styles.input}
                title="Add Contact"
                onPress={() => navigate('home')}
            />
        </View>
    )
}
export default Home

const styles = StyleSheet.create({
    TextInput: {
        flex: 1,
        backgroundColor: 'green'

    },
    input:{
        backgroundColor:'#FFF',
        padding:8,
        marginRight:15,
        marginLeft:15,
        marginVertical:4,
        
    },
    place:{
        marginLeft:15
    }
})