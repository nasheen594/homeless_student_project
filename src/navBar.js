import React, { useContext } from 'react';
import { AuthContext } from './App';

import Home_Icon from './assets/img/Icon.png';
import { Link } from 'react-router-dom';


function Nav(){
    const { isLoggedIn, user  } = useContext(AuthContext);
    return(
        <nav className="navbar navbar-dark navbar-expand-md">
            <div className="container">
                <div><img src={Home_Icon}/></div>
                <div className="navbar-brand">HavenForHomeless</div>
                <button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1">
                    <span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navcol-1">
                    {isLoggedIn ? (
                        <>
                            <ul className="nav navbar-nav">
                                <li className="nav-item" role="presentation"><Link className="nav-link active" to="/">Home</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link active" to="/availableServices">Available Services</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link active" to="/newService">New Service</Link></li>
                                <li className="nav-item" role="presentation"><Link className="nav-link active" to="/detail">Details</Link></li>
                            </ul>
                            <span className="ml-auto"><Link className="user" >Welcome, {user.username} </Link></span> 
                            <Link className="btn btn-light action-button" to="/signout">Sign Out</Link>
                        </>
                    ) : (
                        <>
                            <span className="ml-auto"><Link className="login" to="/login">Login</Link></span>
                            <Link className="btn btn-light action-button" to="/signUp">Sign Up</Link>
                        </>
                    )}
                </div>
            </div>
        </nav>    
    );
}

export default Nav;

