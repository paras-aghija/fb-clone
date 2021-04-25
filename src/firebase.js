import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBcBxvhuPG_FhHnuRI99ucgX-y3WDgjE1w",
    authDomain: "facebook-clone-ba54d.firebaseapp.com",
    projectId: "facebook-clone-ba54d",
    storageBucket: "facebook-clone-ba54d.appspot.com",
    messagingSenderId: "142481815561",
    appId: "1:142481815561:web:b4849149d731b962c860d8",
    measurementId: "G-8G2277RX5E"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db