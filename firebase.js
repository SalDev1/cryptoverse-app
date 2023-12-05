// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3U3O5qd3EdOVF34XtDKkY3u7AKnyAAIY",
  authDomain: "cryptoverse-app.firebaseapp.com",
  projectId: "cryptoverse-app",
  storageBucket: "cryptoverse-app.appspot.com",
  messagingSenderId: "717562621786",
  appId: "1:717562621786:web:980201c7200ceafa218d63",
  measurementId: "G-FX3CXJQ7Q4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
