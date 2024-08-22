import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Service from './Components/Service';
import About from './Components/About';
import Users from './Components/Users';
import Registration from './Components/Registration';
import Login from './Components/Login';
import Team from './Components/Team';
import PrivacyPolicy from './Components/PrivacyPolicy';
import Wedding from './Components/pages/Wedding';
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Service" element={<Service />} />
        <Route path="/about" element={<About />} />
        <Route path="/Team" element={<Team />} />
        <Route path="/Privacy-policy" element={<PrivacyPolicy/>} />
         <Route path="/Wedding" element={<Wedding />} />
        
        <Route path="/Users" element={<Users/>} />
        <Route path="/Registration" element={<Registration/>} />
        <Route path="/Login" element={<Login/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
