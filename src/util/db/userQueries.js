import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, getDocs } from 'firebase/firestore';
import firebaseConfig from './firebaseConfig.json';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const getUserData = async function () {

    let users = [];
    const userRef = collection(db, 'users');

    await getDocs(userRef).then((user) => {
        users = user.docs.map((doc) => ({ ...doc.data(), name: doc.data().firstName + " " + doc.data().lastName }))

    }).catch((err) => {
        console.log(err);
    })

    return users;
}

export default getUserData;