import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyClp_s52zI-0xqhwZZ1M2V1Ck8MNR01k-0",
  authDomain: "booking-house-1424e.firebaseapp.com",
  projectId: "booking-house-1424e",
  storageBucket: "booking-house-1424e.appspot.com",
  messagingSenderId: "444846494375",
  appId: "1:444846494375:web:d407de2074511002568182",
  measurementId: "G-38NV6FPMMX"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);