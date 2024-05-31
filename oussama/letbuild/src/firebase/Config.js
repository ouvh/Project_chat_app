// firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyAjAWyBBbjcC3NtHBH0HmtLFsgcO3CFj_c",
    authDomain: "chatflowcc.firebaseapp.com",
    projectId: "chatflowcc",
    storageBucket: "chatflowcc.appspot.com",
    messagingSenderId: "395501223717",
    appId: "1:395501223717:web:93ec38b6c95b43044ba4cc"
  };

  
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app)

export { auth, firestore ,storage};
