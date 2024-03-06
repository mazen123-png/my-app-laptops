import React, {useState} from 'react'
import { NavLink,useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import imageUser from '../../assests/userImage.jpeg'
import { useSelector } from 'react-redux';

const LoggedHeader = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const currentUser = JSON.parse(localStorage.getItem('currentuserLogged')) || null;
    const [isOpen, setIsOpen] = useState(false);
    const navg = useNavigate()
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    const handleLogOut = ()=>{
        const userLogOutFName = null
        localStorage.setItem('currentuserLogged',JSON.stringify(userLogOutFName))
        navg("../")
    }

    const cart = useSelector(state => state.cart)
  return (
    <nav className='d-flex justify-content-around align-items-center'>
        <div>
            <h1 className='text-uppercase text-white fs-2'><NavLink to="/" className="text-white text-decoration-none">LuminaPad</NavLink></h1>
        </div>
        <div className={`containNavLinks  align-items-center justify-content-evenly gap-4 ${isNavOpen ? 'open' : ''}`}>
            <div className='d-flex gap-3'>
                <NavLink to='/products' className='nav-link text-white opacity-75'>Products</NavLink>
            </div>
            <div className='navAddIcon d-flex mx-3 align-items-center gap-4'>
                <h3 className='mx-2 position-relative'><NavLink to='/cart' style={{color:"#fff"}}><i class="fa-solid fa-cart-shopping"></i><span style={{position:"absolute",top:"-5px",right:"-25px",color:"#b2b5f2",fontSize:"20px"}}>{cart.length}</span></NavLink></h3>
                <h3 className='mx-2'><NavLink to="/favourites" className='text-danger'><i class="fa-solid fa-heart"></i></NavLink></h3>
                
            </div>
            <Dropdown show={isOpen} onClick={handleToggle}>
                    <Dropdown.Toggle  style={{backgroundColor:"transparent",border:"none"}} id="dropdown-basic">
                        <img src={imageUser} height={50} width={50} alt="" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu className={`d-flex flex-column justify-content-center align-items-center gap-3 ${isOpen ? '':'d-none'}`} style={{backgroundColor:"#484CB4"}}>
                        <h5 className='text-white fw-bold text-center fs-5'>{currentUser}</h5>
                        <button onClick={handleLogOut} className='btn btn-danger fw-bold px-2 text-capitalize'>Log out <i class="fa-solid fa-arrow-right-to-bracket mx-2"></i></button> 
                    </Dropdown.Menu>
            </Dropdown>
        </div>
        <button className={`navbar-toggler ${isNavOpen ? 'open' : ''}`} onClick={toggleNav}>
                    <span></span>
                    <span></span>
                    <span></span>
         </button>
        
    </nav>
  )
}

export default LoggedHeader


