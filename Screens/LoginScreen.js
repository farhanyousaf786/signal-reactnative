 import { View, Text, Image } from 'react-native'
 import React from 'react'
 import { StatusBar } from 'expo-status-bar';

 
 const LoginScreen = () => {
   return (
     <View>
        <StatusBar style='light'/>
        <Image source={{
        
        uri: "https://imgur.com/XQc4p22.png"

       }}
       
       style={{width: 200, height: 200}}/>
       
     </View>
   )
 }
 
 export default LoginScreen