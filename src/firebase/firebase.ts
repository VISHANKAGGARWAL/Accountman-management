import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDb-WUueKfb0aolWHj-ky-cwsDwuScvxjM",
  authDomain: "accounting-management-31bf6.firebaseapp.com",
  projectId: "accounting-management-31bf6",
  storageBucket: "accounting-management-31bf6.appspot.com",
  messagingSenderId: "537208803536",
  appId: "1:537208803536:web:e670a8a5e0b7a06a620ed5",
};

export function initFirebaseApp() {
  initializeApp(firebaseConfig);
}
