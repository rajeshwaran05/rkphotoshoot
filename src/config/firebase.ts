import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBH1TimYB7s7EJB15yVJOpb2_7sPEyLJQM",
  authDomain: "photo-d375e.firebaseapp.com",
  databaseURL: "https://photo-d375e-default-rtdb.firebaseio.com",
  projectId: "photo-d375e",
  storageBucket: "photo-d375e.firebasestorage.app",
  messagingSenderId: "727686408423",
  appId: "1:727686408423:web:df055e996782e2cd501a42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;