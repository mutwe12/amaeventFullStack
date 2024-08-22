import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import logo from '../Images/log.jpeg';
import Login from './Login';
function Registration() {

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showToast, setShowToast] = useState(false); // State to control toast visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8081/add_user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log(result);
      setShowToast(true); // Show toast on successful registration
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <section className="p-3 p-md-4 p-xl-5">
      <div className="container">
       {/** */} <div className="row">
          <div className="col-12 col-md-6 bsb-tpl-bg-platinum">
            <div className="d-flex flex-column justify-content-between h-100 p-3 p-md-4 p-xl-5">
              <h3 className="m-0">Welcome!</h3>
              <img className="img-fluid rounded mx-auto my-4" loading="lazy" src={logo} alt="Logo" width="100%" height="100%" />
              <p className="mb-0">Not a member yet? <a href="#!" className="link-secondary text-decoration-none">Register now</a></p>
            </div>
          </div>
          <div className="col-12 col-md-6 bsb-tpl-bg-lotion">
            <div className="p-3 p-md-4 p-xl-5">
              <div className="row">
                <div className="col-12">
                  <div className="mb-5">
                    <h2 className="h3">Registration</h2>
                    <h3 className="fs-6 fw-normal text-secondary m-0">Enter your details to register</h3>
                  </div>
                </div>
              </div>
              <form onSubmit={handleSubmit}>
                <div className="row gy-3 gy-md-4 overflow-hidden">
                  <div className="col-12">
                    <label htmlFor="firstName" className="form-label">First Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="firstName" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="lastName" className="form-label">Last Name <span className="text-danger">*</span></label>
                    <input type="text" className="form-control" name="lastName" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">Email <span className="text-danger">*</span></label>
                    <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <label htmlFor="password" className="form-label">Password <span className="text-danger">*</span></label>
                    <input type="password" className="form-control" name="password" id="password" value={formData.password} 
                    onChange={handleChange} required />
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" name="iAgree" id="iAgree" required />
                      <label className="form-check-label text-secondary" htmlFor="iAgree">
                        I agree to the <a href="#!" className="link-primary text-decoration-none">terms and conditions</a>
                      </label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="d-grid">
                      <button className="btn bsb-btn-xl btn-primary" type="submit">Sign up</button>
                    </div>
                  </div>
                </div>
              </form>
              <div className="row">
                <div className="col-12">
                  <hr className="mt-5 mb-4 border-secondary-subtle" />
                  <p className="m-0 text-secondary text-end">
            Already have an account?
            <Link to="/Login" className="link-primary text-decoration-none">Sign in</Link>
               </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification */}
      {showToast && (
        <div id="toast-simple" className="flex items-center w-full max-w-xs p-4 space-x-4 rtl:space-x-reverse text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow dark:text-gray-400 dark:divide-gray-700 dark:bg-gray-800 fixed bottom-4 right-4 z-50" role="alert">
          <svg className="w-5 h-5 text-blue-600 dark:text-blue-500 rotate-45" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m9 17 8 2L9 1 1 19l8-2Zm0 0V9"/>
          </svg>
          <div className="ps-4 text-sm font-normal">Message sent successfully.</div>
        </div>
      )}
    </section>
  );
}

export default Registration;
