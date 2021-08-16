import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBp5QZVwAqQrVGYyiZUzG-E8zgviETGVvs",
  authDomain: "snapchat-clone-4a9df.firebaseapp.com",
  projectId: "snapchat-clone-4a9df",
  storageBucket: "snapchat-clone-4a9df.appspot.com",
  messagingSenderId: "912546129250",
  appId: "1:912546129250:web:022b639c8c9b9b14aa783b"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const provider =  new firebase.auth.GoogleAuthProvider();

  export { db, auth, storage, provider };