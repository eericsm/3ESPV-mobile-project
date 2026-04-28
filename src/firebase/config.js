import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyCAv2RmuLFJyWq_J1AWYOQR2ELufbUVcY0",
  authDomain: "fiap-auth-mobileapp.firebaseapp.com",
  projectId: "fiap-auth-mobileapp",
  storageBucket: "fiap-auth-mobileapp.firebasestorage.app",
  messagingSenderId: "920985270989",
  appId: "1:920985270989:web:cee76491d27a3c2a6a8784"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth, db };
