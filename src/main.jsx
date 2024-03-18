import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBUf9sPRUkbcKHVyVcvhHTJhs1YaCwNABA",
  authDomain: "gym-xw.firebaseapp.com",
  projectId: "gym-xw",
  storageBucket: "gym-xw.appspot.com",
  messagingSenderId: "539705940946",
  appId: "1:539705940946:web:f7750e0604edc2743d460b"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
