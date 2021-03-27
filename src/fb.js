import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDliONqQfyRSVd2W9vSzqCSWskT7mG8n-g",
    authDomain: "todo-ninja-a5b83.firebaseapp.com",
    projectId: "todo-ninja-a5b83",
    storageBucket: "todo-ninja-a5b83.appspot.com",
    messagingSenderId: "723198079672",
    appId: "1:723198079672:web:f9b3d78e9f088057a4fa4d",
    measurementId: "G-G4W3DMQ6NR"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

db.settings({timestampsInSnapshots: true});

export default db;