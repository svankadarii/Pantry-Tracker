// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCyvmOdZiuQiaaDVEznkmTNLU96BbdApsU",
  authDomain: "pantry-tracker-7d9f4.firebaseapp.com",
  projectId: "pantry-tracker-7d9f4",
  storageBucket: "pantry-tracker-7d9f4.appspot.com",
  messagingSenderId: "1048139343293",
  appId: "1:1048139343293:web:83eded7a111de1f3f49ed4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app)

export{firestore}