import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBOcrtsCJd5VagBgMmNXizRHKQwf40dwNM",
  authDomain: "react-dictionary-b0d1b.firebaseapp.com",
  databaseURL: "https://react-dictionary-b0d1b.firebaseio.com",
  projectId: "react-dictionary-b0d1b",
  storageBucket: "react-dictionary-b0d1b.appspot.com",
  messagingSenderId: "345980745110",
  appId: "1:345980745110:web:b2acb8e5fbf12e621ad9b7",
};

export const firebaseApp = firebase.initializeApp(config);
export const wordRef = firebaseApp.database().ref("word");
export const meaningRef = firebaseApp.database().ref("meaning");
