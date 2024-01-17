// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCetDNeCzjtZim23PfUJCx1Di-QpaWtCWY",
  authDomain: "fir-login-f8fea.firebaseapp.com",
  projectId: "fir-login-f8fea",
  storageBucket: "fir-login-f8fea.appspot.com",
  messagingSenderId: "289707836343",
  appId: "1:289707836343:web:2ee4aa4f8c0d9a61c25e32",
  measurementId: "G-MR9KYCPV3K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);