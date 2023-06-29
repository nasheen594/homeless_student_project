import React, { useEffect, useContext } from 'react';  
import { useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import { AuthContext } from '../App'; 

const SignOutPage = () => {
  const navigate = useNavigate();
  const { setLoggedIn } = useContext(AuthContext); 

  useEffect(() => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('Sign-out successful.');
      setLoggedIn(false); // set isLoggedIn to false after sign-out
      navigate("/");  
    }).catch((error) => {
      // An error happened.
      console.error('An error happened during sign-out:', error);
    });
  }, [setLoggedIn]);  

  return (
    <div>
      Signing out...
    </div>
  );
};

export default SignOutPage;
