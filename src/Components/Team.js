import React from 'react';
import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Service.css'; // Optional: For any additional custom styling
import teamMember1 from '../Images/teamMember1.jpeg';
import teamMember2 from '../Images/teamMember2.jpeg';
import teamMember3 from '../Images/teamMember3.jpeg';
import teamMember4 from '../Images/teamMember4.jpeg';
import teamMember5 from '../Images/teamMember5.jpg';
import teamMember6 from '../Images/teamMember6.jpg';
import teamMember7 from '../Images/teamMember7.jpg';


// Ensure MDB is globally available
window.mdb = mdb;

function Team() {
  return (
    <div className="container mt-5">
      <h2 className="mb-4 team-title">Our Team</h2>
      <div className="row">
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={teamMember1} alt="Card image cap"/>
            {/* Uncomment and customize as needed */}
            {/* <div className="card-body">
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">CEO</p>
              <p className="card-text">John leads the team with over 20 years of experience in the industry.</p>
              <p className="card-text"><small className="text-muted">Last updated 1 min ago</small></p>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={teamMember2} alt="Card image cap"/>
            {/* Uncomment and customize as needed */}
            {/* <div className="card-body">
              <h5 className="card-title">Jane Smith</h5>
              <p className="card-text">CTO</p>
              <p className="card-text">Jane is the tech guru behind our cutting-edge solutions.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={teamMember3} alt="Card image cap"/>
            {/* Uncomment and customize as needed */}
            {/* <div className="card-body">
              <h5 className="card-title">Emily Johnson</h5>
              <p className="card-text">COO</p>
              <p className="card-text">Emily ensures everything runs smoothly and efficiently.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={teamMember4} alt="Card image cap"/>
            {/* Uncomment and customize as needed */}
            {/* <div className="card-body">
              <h5 className="card-title">Michael Brown</h5>
              <p className="card-text">CFO</p>
              <p className="card-text">Michael is responsible for the company's financial health.</p>
              <p className="card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={teamMember5} alt="Card image cap"/>
            {/* Uncomment and customize as needed */}
            {/* <div className="card-body">
              <h5 className="card-title">Michael Brown</h5>
              <p className="card-text">CFO</p>
              <p className="card-text">Michael is responsible for the company's financial health.</p>
              <p className="card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={teamMember6} alt="Card image cap"/>
            {/* Uncomment and customize as needed */}
            {/* <div className="card-body">
              <h5 className="card-title">Michael Brown</h5>
              <p className="card-text">CFO</p>
              <p className="card-text">Michael is responsible for the company's financial health.</p>
              <p className="card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
            </div> */}
          </div>
        </div>
        <div className="col-md-4">
          <div className="card mb-4">
            <img className="card-img-top" src={teamMember7} alt="Card image cap"/>
            {/* Uncomment and customize as needed */}
            {/* <div className="card-body">
              <h5 className="card-title">Michael Brown</h5>
              <p className="card-text">CFO</p>
              <p className="card-text">Michael is responsible for the company's financial health.</p>
              <p className="card-text"><small className="text-muted">Last updated 2 mins ago</small></p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
