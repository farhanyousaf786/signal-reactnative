import { StyleSheet, View, KeyboardAvoidingView } from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, Button, Input} from 'react-native-elements'
import { withTheme } from '@rneui/themed';

export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ImageUrl, setImageUrl] = useState('');
  const register =()=>{


  }


  useLayoutEffect(()=>{

    navigation.setOptions({
    
      headerBackTitle:"Back to Reg.",
       
    }[navigation])
   })

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <Text  h4 style={{ marginBottom: 20, marginTop: 20, }}>
        Create Account here
      </Text>

      <View  style={styles.inputContainer}>

        <Input 
          placeholder='Full Name'
          autoFocus
          keyboardType='text'
          value={name}
          onChangeText={(text) => setName(text)}
           ></Input>

        <Input placeholder='Email'
         keyboardType='email'
          value={email}
          onChangeText={(text) => setEmail(text)} 
          ></Input>

        <Input placeholder='Password'
          keyboardType='password'
          value={password}
          onChangeText={(text) => setPassword(text)} 
          ></Input>

        <Input placeholder='Here will be img url (optional)'
          keyboardType='text'
          value={ImageUrl}
          onChangeText={(text) => setImageUrl(text)}
          onSubmitEditing={register} 
         ></Input>


        <Button title='Register'
        onPress={register}
        style={styles.inputContainer}>
        </Button>
        
        <View style={{height: 150}}></View>
      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

  container: { 

    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: 'white',



  },

  inputContainer: {

    padding: 10,
    width: 300,

    

  }
})