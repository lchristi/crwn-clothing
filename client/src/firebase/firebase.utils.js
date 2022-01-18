import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";



export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user: ", error.message);
    }
  }
  return userRef;
};

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


// export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {  
//   const collectionRef = firestore.collection(collectionKey);
  
//   const batch = firestore.batch();
//   objectsToAdd.forEach(element => {
//     const newDocRef = collectionRef.doc();
//     batch.set(newDocRef, element);
//     console.log(newDocRef);
//   });

//   return await batch.commit();
// }

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map(doc => {
    const {title, items} = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    }
  });
  //the way this works is it goes to each collection, sets title as the key and stores collection into that object
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
}

export const auth = firebase.auth();
console.log("firebase.auth: " + firebaseConfig.auth);
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
}

export default firebase;
