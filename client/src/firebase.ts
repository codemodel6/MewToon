// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxoe85eDAg5wuDgpLCeZsSY3h4L3j5kWg",
  authDomain: "mewtoon-891cf.firebaseapp.com",
  projectId: "mewtoon-891cf",
  storageBucket: "mewtoon-891cf.appspot.com",
  messagingSenderId: "702976354305",
  appId: "1:702976354305:web:e36b8d3257215c488d7800",
  measurementId: "G-2BCYXKV1Y4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
