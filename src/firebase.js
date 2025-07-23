import { initializeApp } from "firebase/app";
import { 
    createUserWithEmailAndPassword, 
    getAuth, 
    signInWithEmailAndPassword,
    signOut } from "firebase/auth";
import { addDoc, 
         collection, 
         getFirestore } from "firebase/firestore";
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyA2xoYuveByVyHF_3Xh2jfdRhg6hkZpwcU",
  authDomain: "netflix-clone-8f202.firebaseapp.com",
  projectId: "netflix-clone-8f202",
  storageBucket: "netflix-clone-8f202.firebasestorage.app",
  messagingSenderId: "467011206340",
  appId: "1:467011206340:web:6ff2216df6ab10ad775d91"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

const signup = async (name, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password)
        const user = res.user;
        await addDoc(collection(db, "user"), {
            uid: user.uid,
            name,
            authProvider: "local",
            email,
        });    
    } catch (error) {
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}

const login = async (email, password) => {
    try{
       await signInWithEmailAndPassword(auth, email, password);

    } catch (error){
       console.log(error);
       alert(error);

    }
}

const logout = () => {
    signOut(auth);
}

export{auth, db, login, signup, logout};
