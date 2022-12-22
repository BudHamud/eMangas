// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB9g4oKcaI9Hba33MkS87yqGz8s795oRcE",
  authDomain: "emangas-1bb68.firebaseapp.com",
  projectId: "emangas-1bb68",
  storageBucket: "emangas-1bb68.appspot.com",
  messagingSenderId: "499744074581",
  appId: "1:499744074581:web:6a6d3518a651f71c0a1ddc",
  measurementId: "G-LFYNL844NN"
};


const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const firebaseConnection = () => app
const auth = getAuth(app)

export {firebaseConnection, auth}