import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();
const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  // sign in with google
  const signinWithGoogle = () => {
    setIsLoading(true);
    return signInWithPopup(auth, googleProvider);
    // aita korci jate user k home'a login er por home page'a redirect korete pare
  };
  const signUpUsingEmailAndPass = (email, password, name) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //    sign in with email and password
  const signInWithEmail = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // setting up an observer
  useEffect(() => {
    setIsLoading(true);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      }
      else{
        setUser({});
      }
      setIsLoading(false)
    });
  }, []);

  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setUser({});
      })
      .catch((error) => {})
      .finally(()=>{
        setIsLoading(false)
      })
  };
  return {
    user,
    setUser,
    signinWithGoogle,
    signUpUsingEmailAndPass,
    signInWithEmail,
    logOut,
    isLoading,
    setIsLoading,
  };
};
export default useFirebase;
