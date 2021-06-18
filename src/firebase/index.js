import firebase from "firebase/app"
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyDMchoL7BKI_zwciZNvoTTS9o6Jl3EfcVI",
    authDomain: "juan-ecommerce.firebaseapp.com",
    projectId: "juan-ecommerce",
    storageBucket: "juan-ecommerce.appspot.com",
    messagingSenderId: "657301812412",
    appId: "1:657301812412:web:eeb6b15450a8a8079c0cb9"
  };
  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  export function getFirebase() {
    return app
  }
  export function getFirestore() {
    return firebase.firestore(app)
  }