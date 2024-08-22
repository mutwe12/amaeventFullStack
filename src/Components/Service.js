import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Service.css'; // Optional: For any additional custom styling
import proposal3 from '../Images/proposal3.jpeg';
import weddding1 from '../Images/wedding1.jpeg';
import Graduation1 from '../Images/Graduation1.jpeg';

// Ensure MDB is globally available
window.mdb = mdb;

function Service() {
  return (
    <div className="container mt-5">
      <div className="text-center mb-4">
        <h1 className="display-4">Services</h1>
      </div>
      
      <div className="row">
        <div className="col-md-4">
          <a href="/Service" className="card-link">
            <div className="card mb-4">
              <h5 className="card-title">Wedding Coordination</h5>
              <p className="card-text">
                AMEA specializes in creating grand and spectacular wedding launches
                that set the tone for a couple's future together.
              </p>
              <img className="card-img-top" src={weddding1} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">Last updated 1 min ago</small>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="/Service" className="card-link">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Wedding Execution</h5>
                <p className="card-text">
                  Our team meticulously plans and executes these launches, leaving a lasting impression on guests while
                  capturing the essence of the couple's love story.
                  AMEA Event Management specializes in crafting unforgettable moments 
                  for couples embarking on their journey together. Our wedding engagement plans 
                  are meticulously designed to create an intimate, romantic, and personalized experience.
                  From selecting breathtaking venues to curating bespoke themes, 
                  we ensure that every detail reflects the love story of the couple. 
                  Our team orchestrates the perfect ambiance, including exquisite décor, entertainment,
                  and catering, to make this special occasion an unforgettable milestone.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="/Service" className="card-link">
            <div className="card mb-4">
              <h5 className="card-title">Wedding Engagement Plans</h5>
              <p className="card-text">
                Our team orchestrates the perfect ambiance, including exquisite décor, entertainment, and catering, to
                make this special occasion an unforgettable milestone.
              </p>
              <img className="card-img-top" src={proposal3} alt="Card image cap" />
              <div className="card-body">
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className="col-md-4">
          <a href="/Service" className="card-link">
            <div className="card mb-4">
              <img className="card-img-top" src={Graduation1} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Graduation Party Planning</h5>
                <p className="card-text">
                  Graduating is a momentous achievement, and AMEA Event Management takes pride in organizing
                  memorable graduation parties that honor this milestone.
                </p>
                <p className="card-text">
                  <small className="text-muted">Last updated 3 mins ago</small>
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service;
