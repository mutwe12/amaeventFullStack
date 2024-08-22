import React, { useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8081/login', { email, password });
      if (response.status === 200) {
        navigate('/home'); // Use navigate instead of history.push
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  return (
    <MDBContainer className='my-5'>
      <MDBCard>
        <MDBRow className='g-0 d-flex align-items-center'>
          <MDBCol md='4'>
            <MDBCardImage src='https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg' alt='phone' className='rounded-t-5 rounded-tr-lg-0' fluid />
          </MDBCol>
          <MDBCol md='8'>
            <MDBCardBody>
              <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' value={email} onChange={e => setEmail(e.target.value)} />
              <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' value={password} onChange={e => setPassword(e.target.value)} />
              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
                <a href="#!">Forgot password?</a>
              </div>
              <MDBBtn className="mb-4 w-100" onClick={handleLogin}>Sign in</MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
