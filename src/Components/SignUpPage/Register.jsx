import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import './Register.css'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
const Register = () => {
    const navg = useNavigate()
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNumber: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
      const handleChangeValue = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleRegister = (e) => {
        e.preventDefault();
    
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const isEmailRegistered = storedUsers.some(
          (user) => user.email === formData.email
        );
            if(formData.password != formData.confirmPassword){
                setErrorMessage("the two passwords doesn't match");
                return;
            }
        if (isEmailRegistered) {
          setErrorMessage('Email is already registered');
          return;
        }
    
        // Add the new user to local storage
        const newUser = {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          password: formData.password,
          phoneNumber: formData.phoneNumber,
        };
    
        const updatedUsers = [...storedUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
    
        // Clear form data
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: '',
          phoneNumber: '',
        });
    
        setErrorMessage('');
        navg("../logIn")
      };
    
  return (
    <div className="form">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className='d-flex flex-column gap-4' onSubmit={handleRegister}>
            <h2 className="mb-4 text-center">Register Now</h2>

            <div className='contain d-flex justify-content-evenly gap-3'>
                    <Form.Group controlId="firstName">
                        <Form.Control type="text" placeholder="Enter your first name" name="firstName"
                            value={formData.firstName}
                            onChange={handleChangeValue}
                            required />
                    </Form.Group>

                    <Form.Group controlId="lastName">
                        <Form.Control type="text" placeholder="Enter your last name" name="lastName"
                            value={formData.lastName}
                            onChange={handleChangeValue}
                            required />
                    </Form.Group>
            </div>

            <div className='contain d-flex justify-content-evenly gap-3'>
                <Form.Group controlId="email">
                    <Form.Control type="email" placeholder="Enter your email" name="email"
                        value={formData.email}
                        onChange={handleChangeValue}
                        required />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Control type="password" placeholder="Enter your password" name="password"
                        value={formData.password}
                        onChange={handleChangeValue}
                        required />
                </Form.Group>
            </div>

            <div className='contain d-flex justify-content-evenly gap-3'>
                <Form.Group controlId="confirmPassword">
                    <Form.Control type="password" placeholder="Confirm your password" name="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChangeValue}
                        required />
                </Form.Group>

                <Form.Group controlId="phoneNumber">
                    <Form.Control type="tel" placeholder="Enter your phone number" name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChangeValue}
                        required />
                </Form.Group>
            </div>
            {errorMessage && (
              <div className="text-danger mb-3 text-capitalize">{errorMessage}</div>
            )}
            <Button variant="primary" type="submit" className="w-100 mt-3">
              Sign Up
            </Button>
            <h5 className='text-capitalize' style={{fontSize:"14px"}}>already have an account <NavLink to="/logIn" className='text-decoration-none'>log in</NavLink></h5>
          </Form>
        </Col>
      </Row>
    </div>
  );
};

export default Register;
