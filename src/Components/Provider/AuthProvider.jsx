import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {

    const [user, setUser]= useState(' ');
    const [loading, setLoading]=useState(true);


    const googleProvider = new GoogleAuthProvider();
    const githubProvider= new GithubAuthProvider();
    
    // Sign in / log in by google
    const googleSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    /// sign in/ log in by GitHub
    const githubSignIn=()=>{
        setLoading(true);
        return signInWithPopup(auth, githubProvider)
    }


    // create user with email and password 
    const createUser=( email, password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
        
    }

    // Sign or log in with email and password
    const loginUser=( email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,  email, password);

    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }



    useEffect(()=>{
        const unsubcribe= onAuthStateChanged(auth, currentUser=>{
            console.log('On auth state changed' , currentUser);
            setUser(currentUser);
            setLoading(false);
        })


        return()=>{
            unsubcribe([]);
        }

    },[])


    const userInfo={
        user, 
        githubSignIn,
        googleSignIn,
        loading,
        loginUser,
        createUser,
        logOut


    };

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;