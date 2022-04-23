import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
const firebaseConfig = {
  apiKey: 'AIzaSyCGliESOcNyn1riOELhpm3r002V3muS5bk',
  authDomain: 'crwn-db-41f24.firebaseapp.com',
  projectId: 'crwn-db-41f24',
  storageBucket: 'crwn-db-41f24.appspot.com',
  messagingSenderId: '42697482545',
  appId: '1:42697482545:web:6b0711a717151971cb1010',
  measurementId: 'G-J1PHW1KQM5',
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.getCustomParameters({
  prompt: 'select_account',
});

const auth = getAuth();

export const signInWithGooglePopup = () => {
  return signInWithPopup(auth, provider);
};

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
