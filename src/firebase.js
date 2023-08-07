// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBBfL8v2OyX3_Ye-1pEu1wH1lTzkY4XSiA",
    authDomain: "facebook-clone-27f1a.firebaseapp.com",
    projectId: "facebook-clone-27f1a",
    storageBucket: "facebook-clone-27f1a.appspot.com",
    messagingSenderId: "905003894447",
    appId: "1:905003894447:web:9435e63c4dcd9b7426b65a",
    measurementId: "G-WWT9CF4RBV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;