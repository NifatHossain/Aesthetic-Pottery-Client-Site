import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const AuthContext= createContext(null)

const provider = new GoogleAuthProvider();
const fbprovider = new FacebookAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]= useState(true);
  

    const registerUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInUser=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn=()=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
    }
    const fbSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, fbprovider)
    }
    const updateUserInfo=(name,url)=>{
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: url
          })
    }
    const userLogOut =()=>{
        signOut(auth)
    }
    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                console.log(currentUser)
                setUser(currentUser)
            } else {
              setUser(null)
            }
            setLoading(false)
          });
          return ()=>{
            return unsubscribe();
          }

    },[])
    const contextValues ={user,registerUser,signInUser,loading, googleSignIn, fbSignIn, updateUserInfo,userLogOut}
    return (
        <AuthContext.Provider value={contextValues}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;