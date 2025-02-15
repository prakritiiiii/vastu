import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyA-QEsR_wtuQhGiyl41TzGsxwYfbYAhIfo",
  authDomain: "vastubypreeti-jog.firebaseapp.com",
  projectId: "vastubypreeti-jog",
  storageBucket: "vastubypreeti-jog.appspot.com",
  messagingSenderId: "572523869045",
  appId: "1:572523869045:web:9cf008fdd4b349bfb6593c",
  measurementId: "G-93J6KZ10HL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };