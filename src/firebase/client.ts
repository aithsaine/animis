import { getApp, getApps, initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';


const clientCridentials = {
    apiKey: "AIzaSyDmJ3HccmtzNCQKYNRntZ0RaHeJMv0bJVM",
    authDomain: "animix-c09f6.firebaseapp.com",
    projectId: "animix-c09f6",
    storageBucket: "animix-c09f6.appspot.com",
    messagingSenderId: "934760719082",
    appId: "1:934760719082:web:7561acecb0f3b25d2f2d93",
    measurementId: "G-EJV69HQRB2"
}

const app = !getApps().length ? initializeApp(clientCridentials) : getApp();


const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword };
