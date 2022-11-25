import { StyleSheet, Text, View,  KeyboardAvoidingView} from 'react-native'
import React from 'react'

export default function RegisterScreen({navigation}) {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>

   <Text h3 style={{marginBottom: 50}}>
        Register Here!
    </Text>


    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

    container:{

        
    }
})