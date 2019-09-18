import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firebase-firestore';

const fireConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
};

class Firebase {
  constructor() {
    firebase.initializeApp(fireConfig)
    this.auth = firebase.auth()
    this.db = firebase.firestore()
  }

  isInitialized() {
    return new Promise(resolve => {
      this.auth.onAuthStateChanged(resolve)
    })
  }

  async register(name, email, password) {
    await this.auth.createUserWithEmailAndPassword(email, password)
    return this.auth.currentUser.updateProfile({
      displayName: name
    })
  }

  login(email, password) {
    return this.auth.signInWithEmailAndPassword(email, password)
  }

  signOut() {
    return this.auth.signOut()
  }
}

export default new Firebase()
