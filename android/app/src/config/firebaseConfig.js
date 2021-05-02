import * as firebase from "firebase";
import "@firebase/auth";
import "@firebase/firestore";

// Create a constant holding the firebase settings
const firebaseConfig = {
  apiKey: "AIzaSyC3FlCanXwwVTRHgPzAJtOpJmUnMzxJOvk",
  authDomain: "se-project-b5240.firebaseapp.com",
  databaseURL: "https://se-project-b5240-default-rtdb.firebaseio.com",
  projectId: "se-project-b5240",
  storageBucket: "se-project-b5240.appspot.com",
  messagingSenderId: "530520127403",
  appId: "1:530520127403:web:ba3eefed9b1785406d44ee",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if connection already initialized, use that one
}

export default firebase;