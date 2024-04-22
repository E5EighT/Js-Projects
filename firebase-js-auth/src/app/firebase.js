
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-auth.js"
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.1/firebase-firestore.js"
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "SOME_FIREBASE_KEY",
    authDomain: "fir-auth-js-30254.firebaseapp.com",
    projectId: "fir-auth-js-30254",
    storageBucket: "fir-auth-js-30254.appspot.com",
    messagingSenderId: "10505247994912",
    appId: "1:1050524799491:web:e4935c30b632765b77f4362"
  };

  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app)
 export const db = getFirestore(app)
