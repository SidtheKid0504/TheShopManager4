import firebase from 'firebase';
require('@firebase/firestore');

const firebaseConfig = {
    apiKey: "AIzaSyAc8eAdlO8RQEczaYovXO1CRvZ1QfTJjqU",
    authDomain: "theshopmanager-47e10.firebaseapp.com",
    databaseURL: "https://theshopmanager-47e10-default-rtdb.firebaseio.com",
    projectId: "theshopmanager-47e10",
    storageBucket: "theshopmanager-47e10.appspot.com",
    messagingSenderId: "661777080231",
    appId: "1:661777080231:web:530528ab82672c7bb8e082"
  };

firebase.initializeApp(firebaseConfig);
export default firebase.firestore();