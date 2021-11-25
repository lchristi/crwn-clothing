import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC95rZVCB0eF053MxzAFNmJhPPH-xLSJFA",
  authDomain: "crwn-db-4a083.firebaseapp.com",
  projectId: "crwn-db-4a083",
  storageBucket: "crwn-db-4a083.appspot.com",
  messagingSenderId: "499134906249",
  appId: "1:499134906249:web:4f1818f18a4c4d444e6b58",
  measurementId: "G-N7KJPKPZ87",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
console.log("firebase.auth: " + firebaseConfig.auth);
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
