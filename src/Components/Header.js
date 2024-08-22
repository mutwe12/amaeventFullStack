import * as mdb from 'mdb-ui-kit'; // lib
import 'mdb-ui-kit/css/mdb.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Css/Header.css';
import './Css/Footer.css';
import logo from '../Images/log.jpeg';
import './Css/Home.css';
import { Link } from 'react-router-dom'; // Import Link

window.mdb = mdb;

function Header() {
  return (
    <div>
      <nav className="bg-black-gray navbar navbar-expand-lg" data-bs-theme="light">
        <div className="container-fluid p-3 text-white fs-5">
          <Link className="navbar-brand" to="/"> {/* Use Link instead of a */}
            <img src={logo} alt="Logo" width="100" height="100" style={{ borderRadius: '8%' }} />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor03" aria-controls="navbarColor03" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor03">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Service">Service</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" 
                data-bs-toggle="dropdown" 
                to="#" role="button" aria-haspopup="true" 
                aria-expanded="false">About Us</Link>
                <div className="dropdown-menu text-center fs-6">
                  <Link className="dropdown-item" to="/Team">Team</Link>
                  <Link className="dropdown-item" to="/About">What we do</Link>
                </div>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" 
                data-bs-toggle="dropdown" 
                to="#" role="button" aria-haspopup="true" 
                aria-expanded="false">Events</Link>
                <div className="dropdown-menu text-center fs-6">
                <Link className="dropdown-item" to="/wedding">Wedding</Link>

                  <Link className="dropdown-item" to="#">Proposal</Link>
                  <Link className="dropdown-item" to="#">Birthday and Graduation parties</Link>
                  <Link className="dropdown-item" to="#">Protocol & Service</Link>
                  <Link className="dropdown-item" to="#">Corporate Happy Hours</Link>
                  <div className="dropdown-divider"></div>
                  <Link className="dropdown-item" to="#">More</Link>
                </div>
              </li>
              {/** <li className="nav-item">
                <Link className="nav-link" to="/Registration">Join us Today</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/Users">Users</Link>
              </li>
              */}
            </ul>
          
            <form className="d-flex ms-auto">
              <input className="form-control me-sm-2" type="search" placeholder="Search" />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form>
            
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
