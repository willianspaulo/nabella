const Rebase = require('re-base')
const firebase = require('firebase')

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBfaE4KSLq2XdGXsYnK2MXSlytb-rEuKzg",
    authDomain: "nabella-app.firebaseapp.com",
    databaseURL: "https://nabella-app.firebaseio.com",
    projectId: "nabella-app",
    storageBucket: "nabella-app.appspot.com",
    messagingSenderId: "664411932894"
};

const app = firebase.initializeApp(firebaseConfig)
const config = Rebase.createClass(app.database())

export const providers = {
  'facebook': new firebase.auth.FacebookAuthProvider,
  'google': new firebase.auth.GoogleAuthProvider,
  'github': new firebase.auth.GithubAuthProvider,
  'twitter': new firebase.auth.TwitterAuthProvider,
}

export const auth = app.auth()
export const storage = app.storage()
export default config