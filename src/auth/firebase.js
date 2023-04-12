import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { toastErrorNotify, toastSuccessNotify, toastWarnNotify } from "../helpers/ToastNotify";

//* Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

//create new users
export const createUser=async(email,password,navigate,displayName)=>{
  try {

   let userCredential= await createUserWithEmailAndPassword(auth, email, password)
   await updateProfile(auth.currentUser, {
    displayName: displayName
  }) 
   navigate("/")
   toastSuccessNotify("Registered successfully!")
  //  console.log(userCredential)
  } catch (error) {
    console.log(error)
  }
  
};

//signin for existing users
export const signIn= async(email, password,navigate)=>{
  try {
    signInWithEmailAndPassword(auth, email, password)
    navigate("/")
    toastSuccessNotify("Log in  successfully!")
  } catch (error) {
    console.log(error)
    toastWarnNotify("You entered false email or password!")
  }
};

export const userObserver=(setCurrentUser)=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const {email,displayName,photoURL}=user
      setCurrentUser({email,displayName,photoURL})
      console.log(user)
    } else {
      setCurrentUser(false);
      console.log("user signed out")
    }
  });
}

export const logOut=()=>{
  signOut(auth)
  toastSuccessNotify("Sign out successfully!")
}

export const signUpWithGoogle = (navigate) =>{
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    navigate("/")
    toastSuccessNotify("Sign in successfully")
  }).catch((error) => {
    // Handle Errors here.
    console.log(error)
  });
}