import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {  createUserWithEmailAndPassword, updateProfile   } from 'firebase/auth';
import { auth } from '../firebaseConfig';
import '../Styles/signUpPage.css';
import Nav from '../navBar';
import Footer from '../Footer';
 
import { FaUser } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Signup = () => {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

const onSubmit = async (e) => {
  e.preventDefault();
  await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        updateProfile(user, {
            displayName: username
        }).then(() => {
          // Profile updated!
          // navigate to login or wherever...
          navigate("/login");
        }).catch((error) => {
          // An error occurred
          console.error(error);
        });
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
    });
}
 
  return (
    <>
        <main>
            <div className="header-blue">
                <Nav/>
                <section>
                    <div className="container hero my-5">
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6">
                                <h1 className="mb-4 text-center">Sign Up</h1>
                                <form id="create-service-form" onSubmit={onSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="password">
                                            User Name
                                        </label>
                                        <div className="icon-wrapper">
                                            <i className="icon"><FaUser /></i>
                                            <input
                                                className="form-control"
                                                id="UserName"
                                                name="UserName"
                                                type="UserName"
                                                label="Create UserName"
                                                value={username}
                                                onChange={e => setUsername(e.target.value)}
                                                required                                 
                                                placeholder="User Name"              
                                            />
                                        </div>
                                    </div>  
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="email-address">
                                            Email address
                                        </label>
                                        <div className="icon-wrapper">
                                            <i className="icon"><FaEnvelope /></i>
                                            <input
                                                className="form-control"
                                                id="email-address"
                                                name="email"
                                                type="email"
                                                label="Email address"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}  
                                                required                                    
                                                placeholder="Email address"                                
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label" htmlFor="password">
                                            Password
                                        </label>
                                        <div className="icon-wrapper">
                                            <i className="icon"><FaLock /></i>
                                            <input
                                                className="form-control"
                                                id="password"
                                                name="password"
                                                type="password"
                                                label="Create password"
                                                value={password}
                                                onChange={(e) => setPassword(e.target.value)} 
                                                required                                 
                                                placeholder="Password"              
                                            />
                                        </div>
                                    </div> 
                                    <button
                                        className="btn btn-light action-button"
                                        type="submit"                        
                                    >  
                                        Sign up                                
                                    </button>                                          
                                </form>
                                <p className="text-sm text-white text-center">
                                    Already have an account?{' '}
                                    <NavLink to="/login" className="signIp">
                                        Sign in
                                    </NavLink>
                                </p>  
                            </div>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </main>
    </>
  );
};
 
export default Signup; 
