import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { NavLink ,useNavigate} from 'react-router-dom';
import {user} from '../../Data/LoggedUsers'
import Header from '../Header/Header';
const LogIn = () => {
  const navg = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Check credentials
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userFound = storedUsers.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (userFound) {
      setErrorMessage('');
      sessionStorage.setItem('currentUser', JSON.stringify(userFound));
      console.log('Welcome, ' + userFound.firstName);
      user = userFound.firstName
      localStorage.setItem("currentuserLogged", JSON.stringify(user))
      navg("../")
    } else {
      setErrorMessage('Invalid email or password');
    }
    
  };
  return (
    <div>
      <Header />
      <div className="form">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className='d-flex flex-column gap-4' onSubmit={handleLogin}>
            <h2 className="mb-4 text-center">Log In</h2>
            <div className='contain d-flex justify-content-evenly gap-3'>
                <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Enter your email" name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="Enter your password" name="password"
                        value={formData.password}
                        onChange={handleInputChange}
                        required />
                </Form.Group>
            </div>
            {errorMessage && (
              <div className="text-danger mb-3 text-capitalize">{errorMessage}</div>
            )}
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Log In
            </Button>
            <h5 className='text-capitalize' style={{fontSize:"14px"}}>don't have an account <NavLink to="/register" className='text-decoration-none'>Register</NavLink></h5>
          </Form>
        </Col>
      </Row>
    </div>
    </div>
  )
}

export default LogIn
