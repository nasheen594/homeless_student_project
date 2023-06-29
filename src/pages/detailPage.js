import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import '../Styles/detailPage.css';

import Nav from '../navBar';
import Footer from '../Footer';

import data from './data/detail.json'; 



const Card = ({ title, serviceName, description }) => {
    const [showCardBody, setShowCardBody] = useState(false);

    const handleCardClick = () => {
        setShowCardBody(!showCardBody);
    }

    return (
        <div className="col-12 col-md-8 col-lg-6 mx-auto mb-4">
            <div className="card-container" onClick={handleCardClick}>
                <div className="card_header">
                    <h2>{title}</h2>
                </div>
                {showCardBody && (
                    <div className="card-body">
                        <h5 className="card-title">Service Name: {serviceName}</h5>
                        <p className="card-text">{description}</p>
                        <Link className="btn btn-light action-button" to="/">Go back</Link>
                    </div>
                )}
            </div>
        </div>
    );
}

const fetchCards = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(data);
        }, 1000);
    });
};


function Detail() {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetchCards().then(data => setCards(data));
    }, []);

    return (
        <div>   
            {/* ======= Start Main ======= */}
            <main>
                <div className="header-blue-DP">
                    <Nav/>
                    <div className="container hero my-5">
                        <h1 className="mb-4 text-center">Service Details</h1>
                        <div className="row justify-content-center">

                            {cards.map((card, index) => (
                                <Card 
                                    key={index}
                                    title={card.title} 
                                    serviceName={card.serviceName} 
                                    description={card.description} 
                                />
                            ))}

                        </div>
                    </div>  
                    <Footer/>
                </div>
            </main>
            {/* ======= End Main ======= */}
        </div>
    );
}

export default Detail;
