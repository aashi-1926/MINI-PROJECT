import { initializeApp } from
  "https://www.gstatic.com/firebasejs/12.5.0/firebase-app.js";

import { getFirestore } from
  "https://www.gstatic.com/firebasejs/12.5.0/firebase-firestore.js";

import { getAuth } from
  "https://www.gstatic.com/firebasejs/12.5.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "YOUR_FIREBASE_API_KEY",
  authDomain: "eldoranhb.firebaseapp.com",
  projectId: "eldoranhb",
  storageBucket: "eldoranhb.firebasestorage.app",
  messagingSenderId: "417824810181",
  appId: "1:417824810181:web:e1dbb0553763f340813cac"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
