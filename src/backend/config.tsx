import firebase from "firebase";
import 'firebase/firestore'

if(!firebase.apps.length) {
    firebase.initializeApp({
        apiKey: process.env.NEXT_PUBLIC_FIREBASEAPI_KEY,
        authDomain: process.env.NEXT_PUBLIC_FIREBASEAUTH_DOMAIN,
        projectId: process.env.NEXT_PUBLIC_FIREBASEPROJECT_ID,
    })
}

export default firebase