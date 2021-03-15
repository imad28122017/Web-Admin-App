import * as firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCmWiTOtrKGFrjLfh0gSVqr8X5ItcsGWDE",
    authDomain: "smart-police-system.firebaseapp.com",
    databaseURL: "https://smart-police-system.firebaseio.com",
    projectId: "smart-police-system",
    storageBucket: "smart-police-system.appspot.com",
    messagingSenderId: "323914593561",
    appId: "1:323914593561:web:95914051553f03877f0188",
    measurementId: "G-8M7QJ08XYM"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;