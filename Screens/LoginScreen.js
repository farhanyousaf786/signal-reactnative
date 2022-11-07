import React from "react";
import { SafeAreaView, StyleSheet, TextInput, Image } from "react-native";



const LoginScreen = () => {

  return (
    <SafeAreaView>


      <Image source={{
        uri: "https://imgur.com/XQc4p22.png"
      }}
      style={{height: 200, width: 200}}/>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="text"
        autoFocus
        type='email'
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="text"
        type='password'
        secureTextEntry
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

export default LoginScreen;