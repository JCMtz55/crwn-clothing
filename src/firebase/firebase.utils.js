import firebase from "firebase/compat/app"
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const config =  {
  apiKey: "AIzaSyCW4g4VvfkdTIg27Nuw0jNLj69-I3iSFGc",
  authDomain: "crwn-dv-5df32.firebaseapp.com",
  projectId: "crwn-dv-5df32",
  storageBucket: "crwn-dv-5df32.appspot.com",
  messagingSenderId: "878282050671",
  appId: "1:878282050671:web:daffb7bdefaf0faf42919a",
  measurementId: "G-M9XK49H0Z8"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;