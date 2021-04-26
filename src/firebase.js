
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDJXeyp0H7ZbblmTC1WfWpyHlOMRcyRHHo",
  authDomain: "airbnb-clone-a24f8.firebaseapp.com",
  projectId: "airbnb-clone-a24f8",
  storageBucket: "airbnb-clone-a24f8.appspot.com",
  messagingSenderId: "90211289944",
  appId: "1:90211289944:web:903f0dbd08cff3d2fbf32d"
});

const db = firebaseApp.firestore();

export { db };