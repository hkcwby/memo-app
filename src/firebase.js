import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {

    apiKey: process.env.REACT_APP_FIREBASE_KEY,
  
    authDomain: process.env.REACT_APP_FIREBASE_KEY_DOMAIN,
  
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  
    messagingSenderId: process.env.REACT_APP_FIREBASE_KEY_SENDER_ID,
  
    appId: process.env.REACT_APP_MESSAGING_APP_ID,
  };

  firebase.initializeApp(firebaseConfig);

  export default firebase;