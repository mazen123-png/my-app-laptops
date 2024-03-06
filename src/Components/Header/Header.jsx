import React, {useState} from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './Header.css'
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
  return (
    <nav className='d-flex justify-content-around align-items-center'>
        <div>
            <h1 className='text-uppercase text-white fs-2'><NavLink to="/" className="text-white text-decoration-none">LuminaPad</NavLink></h1>
        </div>
        <div className={`containNavLinks  align-items-center justify-content-evenly ${isNavOpen ? 'open' : ''}`}>
            <div className='d-flex gap-3'>
                <NavLink to='/products' className='nav-link text-white opacity-75'>Products</NavLink>
            </div>
            <div className='nav-socialIcons'>
                <i className="fa-brands fa-linkedin-in" />
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-instagram"></i>
            </div>
            <div className='containLogBtns'>
                <NavLink to="/register" className='logBtn btn mx-2 text-capitalize fw-bold'>register</NavLink>
                <NavLink to="/logIn" className='logBtn btn mx-2 text-capitalize fw-bold'>log in</NavLink>
            </div>
            
        </div>
        <button className={`navbar-toggler ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
         </button>
        
    </nav>
  )
}

export default Header

