import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen2 from './Story';


const Homescreen=({navigation})=> {
    {
        return (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
             
            <View>
            <TouchableOpacity onPress={()=>navigation.navigate('Story')}>
                <Image source={require('../Images/profile1.png')} style={styles.img}/>
            </TouchableOpacity>
            </View>
            <Text style={styles.txt}>Yash Tiwari</Text>
            <Text style={styles.txt}>React Native </Text>
            <Text style={styles.txt}>www.website.com</Text>

          </View>
        );
      }
}
export default Homescreen;

const styles=StyleSheet.create({
    img:{
        height:200,
        width:200,

    },
    txt:{
        fontSize:25
    }
})