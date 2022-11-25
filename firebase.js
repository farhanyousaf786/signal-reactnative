import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
let app;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUOW-aSrCRWwH0u8m9K1Ej9gj9sZNc5Bc",
  authDomain: "signal-app-786.firebaseapp.com",
  databaseURL: "https://signal-app-786-default-rtdb.firebaseio.com",
  projectId: "signal-app-786",
  storageBucket: "signal-app-786.appspot.com",
  messagingSenderId: "133165043838",
  appId: "1:133165043838:web:55644ba1c23a41e951082f"
};


if(firebase.apps.length === 0){

  app =   firebase.initializeApp(firebaseConfig);

} else {

    app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();


export {db, auth}