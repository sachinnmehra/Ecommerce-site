import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBuudiNWM9DkpdpN0lmZ3XwOTOQfJASypU",
  authDomain: "ecommerce-website-16d49.firebaseapp.com",
  projectId: "ecommerce-website-16d49",
  storageBucket: "ecommerce-website-16d49.appspot.com",
  messagingSenderId: "599874543583",
  appId: "1:599874543583:web:f0b4fcabc3b1765dea2e6a",
  measurementId: "G-2QCRHE8LCQ",
};

//for storing userdata in firestore

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get(); //for snapshot of userRef
  console.log(snapShot);
  if (!snapShot.exists) {
    //if user dont exist
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        //use to create userdata in firestore
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider(); //for google authentication
provider.setCustomParameters({ prompt: "select_account" }); //use for trigering selecet account whenever we try to sign in with google
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
