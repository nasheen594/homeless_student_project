import React from 'react';
import '../Styles/availableServices.css'; 
import Shelters from '../assets/img/shelters.jfif';
import Food from '../assets/img/food.jpg';
import Clothes from '../assets/img/clothes.jpg';
import Money from '../assets/img/Money.webp';
import Volunteer from '../assets/img/volunteer.png';
import DonatingClothes from '../assets/img/DonatingClothes.jpg';

import Nav from '../navBar';
import Footer from '../Footer';

function AS() {
    return (
        <div>
            <main>
                <div className="header-blue-AS">
                    <Nav/>
                    <header>
                        <h1>For The Homeless</h1>
                    </header>
                    <section className="service-list">
                        <Article 
                            img={Shelters} 
                            altImg="Shelters Picture" 
                            title="Shelters" 
                            description="At Haven For Homeless, our core belief is that every individual, regardless of their circumstances, deserves a haven—a sanctuary where they can find solace, regain their sense of security, and rebuild their lives. We are dedicated to providing a safe, welcoming environment with clean and comfortable living spaces, offering individuals the stability they need to begin anew. With your support and participation, we can together make a profound difference, touching the lives of those in need and restoring hope, one precious soul at a time."
                            hours="Hours: 24 hours" 
                        />
                        <Article 
                            img={Food} 
                            altImg="Serving Food Picture" 
                            title="Food" 
                            description="Welcome to Haven For Homeless, a dedicated service offering nourishment and compassion to those experiencing homelessness. We understand that access to regular meals is essential for physical and emotional well-being. That's why we provide free, nutritious food to ensure that no one goes hungry. Our team of caring volunteers serves warm meals with dignity and respect, fostering a sense of community and belonging. Join us in our mission to alleviate hunger and restore hope. Together, we can make a difference, one meal at a time."
                            hours="Hours: 17:00 - 19:00 hours"
                        />
                        <Article 
                            img={Clothes} 
                            altImg="Clothes Picture" 
                            title="Clothes" 
                            description="At Haven For Homeless, we recognize the importance of clean and comfortable clothing for individuals facing homelessness. Our dedicated service provides free, high-quality clothing to help restore dignity and warmth. Our compassionate team ensures a welcoming environment where individuals can browse and choose clothing items that suit their needs. Join us in our mission to clothe those in need, providing them with the essentials and a renewed sense of self. Together, we can make a positive impact, one garment at a time."
                            hours="Hours: 11:00 - 13:00 hours"
                        />
                    </section>
                    <h1>For The Givers</h1>
                    <section className="service-list">
                        <Article 
                            img={Money} 
                            altImg="Donating Money Picture" 
                            title="Donating Your Money" 
                            description="Welcome to Haven For Homeless, where your financial contribution can create a lasting impact. By donating your money, you can help transform the lives of those experiencing homelessness. Every dollar you give goes towards providing essential resources, shelter, and support services to those in need. Your generosity can help break the cycle of homelessness and offer individuals a chance to rebuild their lives. Join us in our mission to empower change and create a brighter future for all. Together, we can make a tangible difference and bring hope to those who need it most."
                            hours="Hours: 24 hours" 
                        />
                        <Article 
                            img={Volunteer} 
                            altImg="volunteers Picture" 
                            title="Volunteers" 
                            description="We are seeking dedicated individuals like you to join our cause and make a positive impact on the lives of the homeless. As a volunteer, you have the power to bring hope, support, and compassion to those in need. Whether it's serving meals, organizing clothing drives, or providing mentorship, your time and skills can make a real difference. Together, we can create a community that uplifts and empowers those facing homelessness. Join us today and become a catalyst for change. Volunteer and help us build a brighter future for all."
                            hours="Hours: 17:00 - 19:00 hours"
                        />
                        <Article 
                            img={DonatingClothes} 
                            altImg="Donating Clothes Picture" 
                            title="Donating Clothes" 
                            description="Your donated clothes bring warmth, comfort, and dignity to the homeless, making a profound and lasting impact on their lives. Join our mission to build a thriving, inclusive community where everyone thrives. Your contribution breaks the cycle of homelessness, offering hope and empowering those in need. Together, let's make a lasting impact and inspire individuals to rebuild their lives. Donate clothes today to be a catalyst for positive change. Together, we can transform lives, create a brighter future, and foster a community where everyone thrives. Take action now and make a difference!"
                            hours="Hours: 11:00 - 13:00 hours"
                        />
                    </section>
                </div>
                <Footer/>
            </main>
        </div>
    )
}

function Article({ img, altImg, title, description, hours }) {
    return (
      <article className="service">
        <img src={img} alt={altImg} />
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14082.733756572745!2d-80.623022!3d28.0646888!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88de1204fc52a6f7%3A0x37ba57635d6a3f15!2sFlorida%20Institute%20of%20Technology!5e0!3m2!1sen!2sus!4v1686243932353!5m2!1sen!2sus"
            width="600"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
        <p>{hours}</p>
      </article>
    );
  }
  
export default AS;
