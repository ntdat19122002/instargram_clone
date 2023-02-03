// Import the functions you need from the SDKs you need
import { initializeApp,getApps,getApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLyViq1Q4kE32PCoRrlCCbV05QE9TfMME",
  authDomain: "insta-2-yt-9bb5f.firebaseapp.com",
  projectId: "insta-2-yt-9bb5f",
  storageBucket: "insta-2-yt-9bb5f.appspot.com",
  messagingSenderId: "959921642691",
  appId: "1:959921642691:web:5ab495b85f0022df84d676"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app,db,storage}