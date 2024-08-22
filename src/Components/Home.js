import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import 'animate.css';
import Carousel from 'react-bootstrap/Carousel';
import proposal1 from '../Images/proposal1.jpeg';
import proposal2 from '../Images/proposal2.jpeg';
import proposal3 from '../Images/proposal3.jpeg';
import wedding1 from '../Images/wedding1.jpeg'; // Corrected filename
import wedding2 from '../Images/wedding2.jpeg';
import Graduation1 from '../Images/Graduation1.jpeg';
import './Css/Home.css';
import About from './About';
import Service from './Service'; // Assuming 'About.js' is in the same directory
import Team from './Team';

function Home() {
  return (
    <div div className="bg-army-green" >
      <div className="container-fluid p-5  text-center  bg-army-green" 
        >
        <h1  >
          AMEA EVENT MANAGEMENT
        </h1>
        <p className="animate__animated animate__fadeInUp animate__infinite" style={{ animationDuration: '5s' }}>
          We are event Management Agency 
        </p>
      </div>

      <div className="d-flex justify-content-center">
        <div style={{ width: '76%', height: '80%' }}>
          <Carousel>
            <Carousel.Item interval={700}>
              <img
                className="d-block w-100"
                src={proposal1}
                alt="Proposal Plan"
              />
              <Carousel.Caption>
                <h3>Wedding Plans</h3>
                <p>Our wedding engagement plans are meticulously designed 
                  to create an intimate, romantic, and personalized experience.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
              <img
                className="d-block w-100"
                src={proposal2}
                alt="Proposal Plan"
              />
              <Carousel.Caption>
                <h3>Wedding Engagement Plans</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={400}>
              <img
                className="d-block w-100"
                src={proposal3}
                alt="Proposal Plan"
              />
              <Carousel.Caption>
                <h3>Proposal</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={300}>
              <img
                className="d-block w-100"
                src={wedding2}
                alt="Wedding Plan"
              />
              <Carousel.Caption>
                <h3> Engagement </h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={100}>
              <img
                className="d-block w-100"
                src={wedding1} // Corrected filename
                alt="Wedding Plan"
              />
              <Carousel.Caption>
                <h3>Wedding Introduction</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={100}>
              <img
                className="d-block w-100"
                src={Graduation1} // Corrected filename
                alt="Wedding Plan"
              />
              <Carousel.Caption>
                <h3>Graduation</h3>
                <p></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="text-center">
        <h2 className="display-4" >What we do</h2>
        <About />
        <h2 className="display-4">Milestones</h2>
        <Service />
        <Team />
      </div>
    </div>
  );
}

export default Home;
