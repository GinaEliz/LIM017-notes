// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATDotQG9L0kdtpW64ZttGI0lZTQceUbmc",
  authDomain: "dreamsnote-91ecc.firebaseapp.com",
  projectId: "dreamsnote-91ecc",
  storageBucket: "dreamsnote-91ecc.appspot.com",
  messagingSenderId: "928327397221",
  appId: "1:928327397221:web:4a3430fd78405e04787b8c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
