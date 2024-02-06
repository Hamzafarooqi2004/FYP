import React, { useState } from 'react';
import "./Login.css"
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import './SignUp.css';
import { useSignUp } from '../Hooks/useSignUp';
import { useNavigate } from 'react-router-dom';
//import image from '../images/form pic.jpg';
import Navbar from '../Components/Navbar';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signUp, isLoading, error] = useSignUp();
    const navigate = useNavigate();

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        await signUp(email, password);


        setEmail("")
        setPassword("")
        if(!error){
            navigate('/discoverArt');
        }
        
    };

  return (
    <div>
      <Navbar />
    <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5 mt-10'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            <span className="h1 fw-bold mb-0">Logo</span>
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Sign Up</h3>
            
            
              <MDBInput wrapperClass='mb-4 mx-5 w-100'
               label='Email' id='formControlLg' 
               type='email' size="lg"
               onChange={(e) => {
                setEmail(e.target.value);
                }}
                value={email}
              />
              <MDBInput wrapperClass='mb-4 mx-5 w-100' 
              label='Password' id='formControlLg' 
              type='password' size="lg"
              onChange={(e) => {
                setPassword(e.target.value);
                }}
                value={password}
            />

              <button className="custom-mdb-button" type="submit" disabled={isLoading} 
                      onClick={onSubmitHandler}>Sign Up</button>
              
              {error && <div className='error'>{error}</div>}

            {/* <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p> */}
            {/* <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p> */}

          </div>

        </MDBCol>

        {/* <MDBCol sm='6' className='d-none d-sm-block px-0' style={{ marginTop: '100px' }}>
          <img src={image}
            alt="Login image" className="w-100" style={{objectFit: 'cover', objectPosition: 'left', maxHeight: '600px'}} />
        </MDBCol> */}

      </MDBRow>

    </MDBContainer>
    </div>
  );
}

export default Login;
