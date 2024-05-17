import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";

export const firebaseConfig = {
  apiKey: "AIzaSyDjvaJKm9tQ4-pfm8jhOnjaCPhmoPuR2Yg",
  authDomain: "nbi-site-db.firebaseapp.com",
  projectId: "nbi-site-db",
  storageBucket: "nbi-site-db.appspot.com",
  messagingSenderId: "1023048778196",
  appId: "1:1023048778196:web:3fc27cd27d450e6fe95641"
};

export const app = initializeApp(firebaseConfig);