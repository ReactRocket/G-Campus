import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function startFirebase() {
    const firebaseConfig = {
        apiKey: "AIzaSyD0ApkbRFJxtR-g-4rw0Ljkyv8IWQAAGkI",
        authDomain: "g-campus.firebaseapp.com",
        databaseURL: "https://g-campus-default-rtdb.firebaseio.com",
        projectId: "g-campus",
        storageBucket: "g-campus.appspot.com",
        messagingSenderId: "976113198616",
        appId: "1:976113198616:web:1cd578461618efe822c56d"
    };

    // Initialize Firebase

    const app = initializeApp(firebaseConfig);

    return getDatabase(app);
}

export default startFirebase;