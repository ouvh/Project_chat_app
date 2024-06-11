// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';




  const firebaseConfig = {
    apiKey: "AIzaSyDps38ORUR4lYX-_42j5g4KzHI3p0EWecM",
    authDomain: "chatflow-cc.firebaseapp.com",
    projectId: "chatflow-cc",
    storageBucket: "chatflow-cc.appspot.com",
    messagingSenderId: "285558316961",
    appId: "1:285558316961:web:eebacb9e2f8b53b4e2b5e0"
  };

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)

export { auth, firestore ,storage};
