import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
// const app = firebase.initializeApp({
//     apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//     authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_FIREBASE_APP_ID
// })
const app = firebase.initializeApp({
    apiKey: "AIzaSyDTWXikSnPQLuMefVcp69XK2YiFKzaaJ-8",
    authDomain: "auth-development-cb2d3.firebaseapp.com",
    projectId: "auth-development-cb2d3",
    storageBucket: "auth-development-cb2d3.appspot.com",
    messagingSenderId: "911578258461",
    appId: "1:911578258461:web:3b7ba30b83c713e633faf4"
  })
export const auth = app.auth()
export const db = firebase.firestore()
export default firebase