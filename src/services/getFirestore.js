import firebase from "firebase";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBBQgzK81jxY4LhXtv1hCEpvdtR132F0zM",
    authDomain: "sonrie-para-mi.firebaseapp.com",
    projectId: "sonrie-para-mi",
    storageBucket: "sonrie-para-mi.appspot.com",
    messagingSenderId: "877138627371",
    appId: "1:877138627371:web:a266677eca908fa51b536e"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirestore() {
    return firebase.firestore(app)
}