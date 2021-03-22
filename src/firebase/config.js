import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZU4d0ucoP96juIZGmJ-5yyk8DB19yMgQ',
  authDomain: 'se-project-b5240.firebaseapp.com',
  databaseURL: 'https://se-project-b5240.firebaseio.com',
  projectId: 'se-project-b5240',
  storageBucket: 'se-project-b5240.appspot.com',
  messagingSenderId: '530520127403',
  appId: '1:530520127403:android:912bf179932a7c0e6d44ee',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };