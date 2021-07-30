import React, { Component, useState, useLayoutEffect, useEffect } from 'react'
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'
import { Icon } from 'react-native-elements'
import AsyncStorage from '@react-native-async-storage/async-storage'
const dummmyContacts = [
  // {
  //   name: 'Sam Wilson',
  //   number: '+17062364443434',
  //   image: 'https://images.everydayhealth.com/images/mens-health/6-skincare-tips-men-should-always-follow-peter-kraus-00-722x406.jpg'
  // },
  // {
  //   name: 'Jackobe Black',
  //   number: '+1672454545545',
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsolwYGDMTvwDOGplKGWB39zyZlLt9C3HKkWUUm9kDnXoaS2YABobnDL9Xgp16fLX8pq8&usqp=CAU'
  // },
  // {
  //   name: 'Austin Martin',
  //   number: '+18992454545545',
  //   image: 'https://media.istockphoto.com/photos/hell-melt-your-heart-picture-id1071323266?k=6&m=1071323266&s=612x612&w=0&h=ML48RaVvzNWGhJmzgK4zvbdFpdJUGJdUb2LVbLtL_zQ='
  // },
  // {
  //   name: 'Shaw Wilsone',
  //   number: '+13652454545545',
  //   image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSisokyWBA5xmv183FUXaEjhFbnoAPvKPFaLvQ1aSSjoPX_5QNb-bVn4E7xi6rNJjJo_Sk&usqp=CAU'
  // }
]

function Home(props) {
  const { navigation } = props
  const { navigate } = navigation

  const [contacts, setContacts] = useState([])




  //configure header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () =>
        <TouchableOpacity
          onPress={() => navigate('addContact', { addContact: (data) => handleAddContact(data) })}
          style={{ paddingHorizontal: width(5) }}>
          <Text style={{ color: 'green', fontWeight: 'bold' }}>+ Add</Text>
        </TouchableOpacity>
    });
  }, [navigation, contacts]);


  useEffect(() => {
    getSetContacts()
  }, [])

  const getSetContacts = async () => {
    const contacts = await AsyncStorage.getItem('CONTACTS')
    if (contacts) {
      setContacts(JSON.parse(contacts))
    } else {

    }
  }


  const handleAddContact = async (data) => {
    console.log('new contact object-->', data)
    console.log('old contacts-->', contacts)
    const newContacts = [...contacts, data]
    setContacts(newContacts);
    AsyncStorage.setItem('CONTACTS', JSON.stringify(newContacts))


    //other methode
    // let tempcontacts = contacts
    // tempcontacts.unshift(data)
    // console.log('tempcontacts--->', tempcontacts)
    // setContacts(tempcontacts)

    // let tempcontacts = contacts
    // let newContacts = tempcontacts.concat([data])
    // console.log('newContacts--->', newContacts)
    // setContacts(newContacts)
    // console.log('contacts--->', contacts)

    // setContacts(tempcontacts)
  }

  const deleteContact = (index) => {
    let deletecopy = [...contacts];
    deletecopy.splice(index, 1);
    setContacts(deletecopy);
    AsyncStorage.setItem('CONTACTS', JSON.stringify(deletecopy))
  }

  return (
    <View style={{ flex: 1, backgroundColor: 'lightgray' }}>
      {
        contacts.length ?
          <FlatList
            data={contacts}
            key="key"
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => {
              return (
                <View style={{ marginHorizontal: width(5), backgroundColor: '#FFFFFF', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, marginTop: 10 }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{}}>
                      <Image
                        source={{ uri: item.image }}
                        style={{ height: 50, width: 50, borderRadius: 100 }}
                      />
                    </View>
                    <View width={width(2.5)} />
                    <View style={{ flex: 1, backgroundColor: 'transparent' }}>
                      <Text style={{ fontSize: totalSize(2), fontWeight: 'bold' }}>{item.name}</Text>
                      <View height={height(1)} />
                      <Text style={{ fontSize: totalSize(1.75) }}>{item.number}</Text>
                    </View>
                    <View width={width(2.5)} />
                    <View style={{}}>
                      <Icon key={index} onPress={() => deleteContact(index)} name="delete" type="antdesign" size={totalSize(3.5)} color={'red'} />
                      {/* <Text onPress={() => console.log('delete')} style={{ color: 'red', fontSize: totalSize(1.5) }}>Delete</Text> */}
                    </View>
                  </View>
                </View>
              )
            }}
          />
          :
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <TouchableOpacity
              onPress={() => navigate('addContact', { addContact: (data) => handleAddContact(data) })}
              style={{ alignItems: 'center', justifyContent: 'center' }}>
              <Icon
                name="add-circle"
                size={totalSize(10)}
                color="green"
              />
              <View style={{ height: height(1) }} />
              <Text>Add Contact Now</Text>
            </TouchableOpacity>
          </View>
      }
    </View>
  )
}
export default Home


export const styles = StyleSheet.create({

})