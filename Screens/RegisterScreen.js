import { StyleSheet, Text, View, KeyboardAvoidingView, Button, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function RegisterScreen({ navigation }) {

  const [name, setName] = useState('');

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

      <Text h3 style={{ marginBottom: 50 }}>
        Create Account here
      </Text>

      <View style={styles.inputContainer}>


        <TextInput placeholder='Full Name'
          autoFocus keyboardType='text'
          value={name}
          onChangeText={(text) => setName(text)} ></TextInput>

      </View>

    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

  container: {


  }
})