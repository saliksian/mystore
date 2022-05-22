import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';







const firebaseConfig = {

    apiKey: "AIzaSyBKvsBDjOeed0--KwpKxBuNr20HvqVP6hw",
  
    authDomain: "mystore-93be3.firebaseapp.com",
  
    projectId: "mystore-93be3",
  
    storageBucket: "mystore-93be3.appspot.com",
  
    messagingSenderId: "396288339608",
  
    appId: "1:396288339608:web:d0392b218876bfd30d6aed",
  
    measurementId: "G-MLNKEHYCE0"
  
  };

  const app = initializeApp(firebaseConfig);

  export const db = getFirestore(app)

  