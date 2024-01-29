
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCHvPjiYCNY7mxIL8eAcjOH8G_E8-52JnI",
  authDomain: "dev-jobs-826a4.firebaseapp.com",
  projectId: "dev-jobs-826a4",
  storageBucket: "dev-jobs-826a4.appspot.com",
  messagingSenderId: "230437957192",
  appId: "1:230437957192:web:9a7d187b9043640a5d327d",
  measurementId: "G-13X88JHG9M"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app)