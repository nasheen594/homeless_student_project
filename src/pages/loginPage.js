import React, { useState, useContext  } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

import { AuthContext } from '../App';
import '../Styles/loginPage.css';
import Nav from '../navBar';
import Footer from '../Footer';

import { FaEnvelope } from 'react-icons/fa';
import { FaLock } from 'react-icons/fa';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Access setLoggedIn from AuthContext
  const { setLoggedIn, setUser  } = useContext(AuthContext);

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setLoggedIn(true);
        setUser({ username: user.displayName }); // Store username in the context
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <>
      <main>
        <div className="header-blue">
          <Nav/>
          <section>
            <div className="container hero my-5">
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-6">
                  <h1 className="mb-4 text-center">Login</h1>
                  <form id="create-service-form">
                    <div className="mb-3">
                      <label htmlFor="email-address" className="form-label">
                        Email address
                      </label>
                      <div className="icon-wrapper">
                        <i className="icon"><FaEnvelope /></i>
                        <input
                          className="form-control"
                          id="email-address"
                          name="email"
                          type="email"
                          required
                          placeholder="Email address"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>

                    <div className="mb-3">
                      <label htmlFor="password" className="form-label">Password</label>
                        <div className="icon-wrapper">
                          <i className="icon"><FaLock /></i>
                          <input
                            className="form-control"
                            id="password"
                            name="password"
                            type="password"
                            required
                            placeholder="Password"
                            onChange={(e) => setPassword(e.target.value)}
                          />
                      </div>
                    </div>

                    <div>
                      <button className="btn btn-light action-button" onClick={onLogin}>Login</button>
                    </div>
                  </form>

                  <p className="text-sm text-white text-center">
                    No account yet?{' '}
                    <NavLink to="/signup" className="signUp">
                      Sign up
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

export default Login;
