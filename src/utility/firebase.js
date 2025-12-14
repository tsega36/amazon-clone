import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDh3vYY4_X37ko1AXrw_eKb4wSQMaHLu1k',
  authDomain: 'clone-a5af3.firebaseapp.com',
  projectId: 'clone-a5af3',
  storageBucket: 'clone-a5af3.appspot.com',
  messagingSenderId: '549985490232',
  appId: '1:549985490232:web:47cb2903aa5f87d53a9dcd',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
