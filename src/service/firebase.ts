
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-2I4su4eMaFEcakNrrndybgWAcWLTSnI",
  authDomain: "oul-final.firebaseapp.com",
  projectId: "oul-final",
  storageBucket: "oul-final.appspot.com",
  messagingSenderId: "99081406477",
  appId: "1:99081406477:web:4d2d93e810029f2d096d44"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);