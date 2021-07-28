import React, { useState } from 'react'
import { View, Text, Button, TextInput, StyleSheet } from 'react-native'
import { TextInputPrimary } from '../../../components/textinputs'
import * as ImagePicker from 'react-native-image-picker'
import { Image } from 'react-native'
import { height, totalSize } from 'react-native-dimension'
import { TouchableOpacity } from 'react-native'

const noUserImage = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'
const options = {
    title: 'Select Photo',
    quality: 1,
    maxWidth: 500,
    maxHeight: 500,
    // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
function Home(props) {
    const [imageFile, setImageFile] = useState(null)
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const { navigate, goBack } = props.navigation
    const { params } = props.route
    //console.log('item-->', params.item)
    console.log('addContact-->', params.addContact)

    const launchImagePicker = () => {
        ImagePicker.launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                //console.log('User cancelled image picker');
            } else if (response.error) {
                //console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                //console.log('User tapped custom button: ', response.customButton);
            } else {
                if (!response.fileName) response.fileName = 'profile_image';
                const tempImageFile = {
                    uri: response.uri,
                    name: response.fileName,
                    type: response.type
                }
                console.log('tempImageFile--->', tempImageFile)
                setImageFile(response.uri)
            }
        });
    }
    const launchCamera = () => {

        ImagePicker.launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                if (!response.fileName) response.fileName = 'profile_image';
                const tempImageFile = {
                    uri: response.uri,
                    name: response.fileName,
                    type: response.type
                }

                console.log('tempImageFile--->', tempImageFile)
                setImageFile(response.uri)
            }
        });
    }

    const handleAddContact = () => {
        // const tempContact = {
        //     name: name,
        //     number: number,
        //     image: imageFile
        // }
        let tempContact = {}
        tempContact['name'] = name
        tempContact['number'] = number
        tempContact['image'] = imageFile
        const { addContact } = params
        addContact(tempContact)
        goBack()
    }
    return (

        <View style={{ backgroundColor: '#FFFFFF' }}>
            <View>
                <View style={{ alignItems: 'center', paddingVertical: height(2) }}>
                    <TouchableOpacity
                        onPress={() => launchImagePicker()}
                    >
                        <Image
                            source={{ uri: imageFile ? imageFile : noUserImage }}
                            style={{ height: totalSize(15), width: totalSize(15), borderRadius: 100 }}
                        />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={styles.place}>Name</Text>
                    <TextInput style={styles.input}
                        placeholder="abc"
                        value={name}
                        onChangeText={text => setName(text)}
                    />
                </View>
                <View>
                    <Text style={styles.place}>Mobile No</Text>
                    <TextInput style={styles.input}
                        placeholder="00000000"
                        value={number}
                        onChangeText={text => setNumber(text)}
                    />
                </View>
                {/* <View>
                    <Text  style={styles.place}>Image url</Text>
                    <TextInput style={styles.input}
                    placeholder=""
                    
                    value={name}
                    onChangeText={text => setNo(text)}
                    />
                </View> */}

            </View>

            <Button style={styles.input}
                title="Add Contact"
                //onPress={() => navigate('home')}
                onPress={handleAddContact}
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
    input: {
        backgroundColor: '#F2F2F2',
        padding: 8,
        marginRight: 15,
        marginLeft: 15,
        marginVertical: 4,

    },
    place: {
        marginLeft: 15
    }
})