import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCeCPCkZXBxFnphVixerzf_KOhjD5Nu7PA",
    authDomain: "mytodoapp-91f19.firebaseapp.com",
    projectId: "mytodoapp-91f19",
    storageBucket: "mytodoapp-91f19.appspot.com",
    messagingSenderId: "96703004699",
    appId: "1:96703004699:web:15ae3ff68e2be18dc338be"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  export {db};