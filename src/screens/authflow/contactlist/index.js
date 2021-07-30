import React, { useState, Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, Alert } from 'react-native'
import { TextInputPrimary } from '../../../components/textinputs'
import * as ImagePicker from 'react-native-image-picker'
import { Image } from 'react-native'
import { height, totalSize } from 'react-native-dimension'
import { TouchableOpacity } from 'react-native'
import Toast from 'react-native-simple-toast';
import Modal from 'react-native-modal';
import { Icon } from 'react-native-elements'
import { width } from 'react-native-dimension'





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
    const [lstname, setLstName] = useState('')
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
        tempContact['image'] = imageFile
        if (imageFile == null) {
            //  alert("please select image")
            Toast.show('please select image');
            return false
        }
        tempContact['name'] = name
        if (name == "") {
            // alert("please fill name")
            Toast.show('please fill name');
            return false
        }
        tempContact['lstname'] = lstname
        if (lstname == "") {
            // alert("please fill name")
            Toast.show('please fill name');
            return false
        }

        tempContact['number'] = number
        if (number == "") {
            //  alert("please fill number")
            Toast.show('please fill number');
            return false
        }

        const { addContact } = params

        addContact(tempContact)

        goBack()
        Toast.show('Contact has been added');
    }
    const [isModalVisible, setModalVisible] = useState(false);
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    // validate_field=()=>{

    //     if (name ==""){
    //         Alert.alert("please fill name")
    //         return false
    //     } else if ( number==""){
    //         Alert.alert("please fill number")
    //         return false  
    //     }else if ( imageFile==""){
    //         Alert.alert("please select image")
    //         return false  
    //     }
    //     return true
    // }

    return (

        <View style={{ backgroundColor: '#FFFFFF' }} >
            <View >
                <View style={{ alignItems: 'center', paddingVertical: height(2) }}>
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center' }}
                        onPress={toggleModal}
                    >

                        <View style={{ height: totalSize(20), width: totalSize(20), backgroundColor: '#f1f1f1', borderRadius: 100 }}>{
                            imageFile ?
                                <Image
                                    source={{ uri: imageFile }}
                                    style={{ height: totalSize(20), width: totalSize(20), borderRadius: 100 }}
                                />
                                :
                                null
                        }
                            <View style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, alignItems: 'center', justifyContent: 'center', backgroundColor: 'transparent' }}>
                                <Icon name="camerao" type="antdesign" size={totalSize(5)} color={'#FFFFFF'} />
                            </View>
                        </View>



                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.place}>First Name</Text>
                       <View style={{}}>
                       <TextInput style={styles.input}
                            placeholder=""
                            value={name}
                            onChangeText={text => setName(text)}

                        />
                       </View>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={styles.place}>Last Name</Text>
                        <View style={{}}>
                        <TextInput style={styles.input}
                            placeholder=""
                            value={lstname}
                            onChangeText={text =>  setLstName(text)}
                        />
                        </View>
                    </View>

                </View>
                <View style={{}}>
                    <Text style={styles.place}>Phone Number</Text>
                    <View style={{}}>
                        <TextInput style={styles.input}
                            placeholder=""
                            value={number}
                            onChangeText={text => setNumber(text)}
                        />
                    </View>
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
            <Modal
                isVisible={isModalVisible}
                style={{ margin: 0 }}
                onBackdropPress={toggleModal}
                swipeDirection="down"
                onSwipeComplete={toggleModal}
            >
                <View style={{ backgroundColor: 'white', marginTop: 300, flex: 1, borderRadius: (10) }}>

                    <View>
                        <Text style={{ fontSize: 20, textAlign: 'center', fontWeight: 'bold' }} >Choose profile image</Text>
                    </View>

                    <TouchableOpacity onPress={() => { toggleModal(), launchCamera() }} style={{ height: height(8), marginHorizontal: width(5), borderRadius: (10), borderColor: 'grey', borderWidth: (1.5), alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: totalSize(1.7), fontWeight: '500', fontWeight: 'bold' }}>Take Photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { toggleModal(), launchImagePicker() }} style={{ height: height(8), marginHorizontal: width(5), borderRadius: (10), borderColor: 'grey', borderWidth: (1.5), alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: totalSize(1.7), fontWeight: '500', fontWeight: 'bold' }}>Select from gallery</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toggleModal} style={{ height: height(8), marginHorizontal: width(5), borderRadius: (10), borderColor: 'grey', borderWidth: (1.5), alignItems: 'center', justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ color: 'black', fontSize: totalSize(1.7), fontWeight: '500', fontWeight: 'bold' }}>cancel</Text>
                    </TouchableOpacity>



                </View>
            </Modal>
        </View >
    )
}
export default Home

const styles = StyleSheet.create({
    TextInput: {
        flex: 1,

        
        

    },
    input: {
        backgroundColor: 'white',
        padding: 8,
        marginRight: 20,
        marginLeft: 20,
        marginVertical: 4,
        borderBottomWidth:1,
        

    },
    place: {
        marginLeft: 20,
        color:'blue'
    }
})