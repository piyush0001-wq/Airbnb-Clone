
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
//your firebase api//
});

const db = firebaseApp.firestore();

export { db };
