import React, { useState } from "react";
import { SafeAreaView, StyleSheet, TextInput, Image, Button } from "react-native";



const LoginScreen = () => {


  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const signIn=()=>{}
  const register=()=>{}

  

  return (
   

    <SafeAreaView style={styles.container}>

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

       <Button containerStyle={styles.button} title="Login" onPress={signIn}/>
       <Button containerStyle={styles.button} title="Register" type="outline" onPress={register}/>


    </SafeAreaView>
  
  );
};

const styles = StyleSheet.create({

  container:{

  },

  input: {
    height: 40,
    margin:  12,
    borderWidth: 1,
    padding: 10,
  },

  button:{}

});

export default LoginScreen;