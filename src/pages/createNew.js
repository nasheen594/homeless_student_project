import React from 'react';
import '../Styles/createNew.css'; 
import Nav from '../navBar';
import Footer from '../Footer';

function CreateNew() {
  return (
    <div>
      <main>
        <div className="header-blue">
          <Nav />
          <div className="container hero my-5">
            <div className="row justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <h1 className="mb-4 text-center">Create New Service</h1>
                <form id="create-service-form" action="/path/to/server/endpoint" method="POST">
                  <div className="mb-3">
                    <label htmlFor="service-name" className="form-label">Service Name:</label>
                    <input type="text" id="service-name" name="service-name" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="service-description" className="form-label">Service Description:</label>
                    <textarea id="service-description" name="service-description" className="form-control" required></textarea>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="service-location" className="form-label">Service Location:</label>
                    <input type="text" id="service-location" name="service-location" className="form-control" required />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="service-hours" className="form-label">Service Hours:</label>
                    <input type="text" id="service-hours" name="service-hours" className="form-control" required />
                  </div>
                  <div className="d-grid gap-2">
                    <button type="submit" className="btn btn-light action-button" role="button">Create Service</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </main>
    </div>
  );
}

export default CreateNew;
