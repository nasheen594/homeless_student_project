import React, { useState, createContext, useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/homePage';
import AS from './pages/availableServices';
import CreateNew from './pages/createNew';
import Detail from './pages/detailPage';
import Signup from './pages/signUpPage';
import Login from './pages/loginPage';
import SignOutPage from './pages/signOutPage';

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null); 

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn, user, setUser }}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/signUp" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signout" element={<SignOutPage />} />

            <Route path="/" element={<Home />} />

            <Route path="/detail" element={<Detail />} />

    {isLoggedIn && (
        <>
            <Route path="/availableServices" element={<AS />} />
            <Route path="/newService" element={<CreateNew />} />
        </>
    )}
</Routes>
        </div>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
