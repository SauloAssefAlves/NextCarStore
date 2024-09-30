import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDNj5y-bE775waeY15BHrYWt3JmHMkshoM",
  authDomain: "webcarros-83e5b.firebaseapp.com",
  projectId: "webcarros-83e5b",
  storageBucket: "webcarros-83e5b.appspot.com",
  messagingSenderId: "414047217590",
  appId: "1:414047217590:web:251ea826fc17fc2ca84317",
  measurementId: "G-HNRCZGJ2LE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
export { db, auth, storage };
