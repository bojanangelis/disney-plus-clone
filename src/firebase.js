import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBuTotmNkHoc5xojmKUYMLL58OYFMrtHKA",
    authDomain: "disney-plus-clone-a1ae1.firebaseapp.com",
    projectId: "disney-plus-clone-a1ae1",
    storageBucket: "disney-plus-clone-a1ae1.appspot.com",
    messagingSenderId: "20039029105",
    appId: "1:20039029105:web:d424df814cef6e42b1a6d0",
    measurementId: "G-H76JBR64D1"
  };


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();
  
export { auth, provider, storage };
export default db;