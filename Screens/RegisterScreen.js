import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [ImageUrl, setImageUrl] = useState('');
  const register =()=>{


  }


  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <Text h3 style={{ marginBottom: 50 }}>
        Create Account here
      </Text>

      <View style={styles.inputContainer}>

        <TextInput placeholder='Full Name'
          keyboardType='text'
          value={name}
          onChangeText={(text) => setName(text)} ></TextInput>

        <TextInput placeholder='Email'
         keyboardType='email'
          value={email}
          onChangeText={(text) => setName(text)} ></TextInput>

        <TextInput placeholder='Password'
          keyboardType='password'
          value={password}
          onChangeText={(text) => setName(text)} ></TextInput>

        <TextInput placeholder='Here will be img url (optional)'
          keyboardType='text'
          value={ImageUrl}
          onChangeText={(text) => setName(text)}
          onSubmitEditing={register} ></TextInput>

      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

  container: {


  },

  inputContainer: {



  }
})