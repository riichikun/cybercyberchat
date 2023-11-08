import { initializeApp } from 'firebase/app'
import { getDatabase, ref, set, push, get, child } from "firebase/database";


const config = {
    apiKey: "AIzaSyBJYWwDRhL5nYU_AW2k-S7OgeV8bBIornw",
    authDomain: "cybercyberchat.firebaseapp.com",
    databaseURL: "https://cybercyberchat-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cybercyberchat",
    storageBucket: "cybercyberchat.appspot.com",
    messagingSenderId: "332783092964",
    appId: "1:332783092964:web:db8962fd7a896e880d98f1"
}

const app = initializeApp(config);
const db = getDatabase(app);
const dbref = ref;
const dbpush = push;
const dbget = get;
export { app, db, set, dbref, dbpush, dbget, child };