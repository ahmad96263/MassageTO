import React, { Component, useState, useLayoutEffect } from 'react'
import { View, Text, Button, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native'
import { height, totalSize, width } from 'react-native-dimension'

export default function Message(props) {
    //const { navigate } = props.navigation
    return (
        <View style={{ marginHorizontal: width(5), backgroundColor: 'grey', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 10, marginTop: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{}}>
            <Image
              source={{ uri:  'https://images.everydayhealth.com/images/mens-health/6-skincare-tips-men-should-always-follow-peter-kraus-00-722x406.jpg'}}
              style={{ height: 50, width: 50, borderRadius: 100 }}
            />
          </View>
          <View width={width(2.5)} />
          <View style={{ flex: 1, backgroundColor: 'transparent' }}>
            <Text style={{ fontSize: totalSize(2), fontWeight: 'bold' }}>Ahmad</Text>
            <View height={height(1)} />
            <Text style={{ fontSize: totalSize(1.75) }}>where are you</Text>
          </View>
          <View width={width(2.5)} />
          <View style={{}}>
            <Text onPress={() => console.log('delete')} style={{ color: 'grey',marginTop:-10, fontSize: totalSize(1.5) }}>Tue</Text>
          </View>
        </View>
      </View>
    )
}
