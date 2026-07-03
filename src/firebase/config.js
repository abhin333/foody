// Import the functions you need from the SDKs you need
import AsyncStorage from "@react-native-async-storage/async-storage";
import { initializeApp } from "firebase/app";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHvZJP_O9SKuuBfIUV2q2iEPkgWoChzf4",
  authDomain: "fast-food-a0f32.firebaseapp.com",
  projectId: "fast-food-a0f32",
  storageBucket: "fast-food-a0f32.firebasestorage.app",
  messagingSenderId: "533584144295",
  appId: "1:533584144295:web:f7052d9b90dbb7724ab882",
  measurementId: "G-041WBKT9K7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export default app;
