// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';

// const firebaseconfig = {
//     apiKey: "AIzaSyCDtR2cYrVkusETFcmt9Gf4n9ls2mgFnsY",
//     authDomain: "crimsonanime.firebaseapp.com",
//     projectId: "crimsonanime",
//     storageBucket: "crimsonanime.appspot.com",
//     messagingSenderId: "1012843850135",
//     appId: "1:1012843850135:web:ddb2469d0bde0453e0bcd2"
  
// };
// const fire = firebase.initializeApp(firebaseconfig);
// const db = firebase.firestore();
// const auth = firebase.auth();
// // const storage = firebase.storage();

// export { fire,  auth ,db};

// Import the functions you need from the SDKs you need
import { initializeApp, getApps,getApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3yfxVYIQph8csEnRdm78BPzIwoqC-oAE",
  authDomain: "crimsoninsurance.firebaseapp.com",
  projectId: "crimsoninsurance",
  storageBucket: "crimsoninsurance.appspot.com",
  messagingSenderId: "451780643449",
  appId: "1:451780643449:web:ff33741f7e9bfd8285e2a8"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth()
const db = getFirestore()

export {auth,db}
