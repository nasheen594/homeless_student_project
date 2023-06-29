import React from 'react';
import { Link } from 'react-router-dom';

import '../Styles/homePage.css';
import Home_Image from '../assets/img/Homeland_Image.png';
import Nav from '../navBar';
import Footer from '../Footer';

function Home(){

    return(
        <div>   

            {/* ======= Start Main ======= */}
            <main>

                <div className="header-blue">
                    <Nav/>
                    <div className="container hero">
                        <div className="row">
                        <div className="col-12 col-lg-6 col-xl-5 offset-xl-1 mt-5">
                                <h1>Welcome to HavenForHomeless</h1>
                                <p>We're dedicated to connecting those in need with local shelters and services.
                                     Explore, find help, or contribute to your community today.
                                </p>
                                <Link to="/detail">
                                    <button className="btn btn-light btn-lg action-button" type="button">Learn More</button>
                                </Link>
                            </div>
                            <div className="col-md-5 col-lg-5 offset-lg-1 offset-xl-0 d-none d-lg-block Homeland_Image">
                                <div className="Shelter"><img src={Home_Image} className="Homeland"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Footer/>
                    </div>

</main>
{/* ======= End Main ======= */}

</div>
);
}

export default Home;