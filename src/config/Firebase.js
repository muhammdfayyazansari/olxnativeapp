// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , createUserWithEmailAndPassword} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4uSTFnHHx2gPtnvfZo3RDIef58fW8Xx8",
  authDomain: "olxnativeapp.firebaseapp.com",
  projectId: "olxnativeapp",
  storageBucket: "olxnativeapp.appspot.com",
  messagingSenderId: "296045902025",
  appId: "1:296045902025:web:ea96fb5869b2ea21dbb518",
  measurementId: "G-HWS2F2Z2BT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const signUpWithEmail = (name, email, password)=>{
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });




}



export {
  signUpWithEmail,
}





