import React, {useState} from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
const LogIn = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
      const [errorMessage, setErrorMessage] = useState('');
      const handleChangeValue = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
      };
    
      const handleLogIn = (e) => {
        e.preventDefault();
        const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
        const isEmailRegistered = storedUsers.some(
          (user) => user.email === formData.email
        );
        const isPasswordTrue = storedUsers.some(
            (user) => user.password === formData.password
          );
        if (!isEmailRegistered) {
          setErrorMessage("Email isn't registered");
          return;
        }
        if (!isPasswordTrue) {
            setErrorMessage("wrong password");
            return;
          }
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
      };
  return (
    <div className="form">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className='d-flex flex-column gap-4' onSubmit={handleLogIn}>
            <h2 className="mb-4 text-center">Log In</h2>
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
  )
}

export default LogIn
