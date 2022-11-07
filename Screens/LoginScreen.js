import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, Button } from "react-native";



const LoginScreen = () => {


  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");


  

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
        value={email}
        onChangeText ={(tetx)=> setEmail(tetx)}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        keyboardType="text"
        type='password'
        secureTextEntry
        value={password}
        onChangeText ={(tetx)=> setPass(tetx)}
      />

       <Button containerStyle={styles.button} title="Login"/>
       <Button containerStyle={styles.button} title="Register"/>


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
  
  button:{}

});

export default LoginScreen;