import React from 'react'
import Logo from "../../assests/Logo.png"
import './Home.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
  const currentUser = JSON.parse(localStorage.getItem('currentuserLogged')) || null;

  return (
    <div style={{marginBottom:"-80px"}}>
      <section className='HomeSection'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div>
                    <img src={Logo} alt="" />
                </div>
                <div>
                    <h3 className='text-capitalize fs-4'>luminaPad the best website to sell labtops all over the world!</h3>
                </div>
                {currentUser ? <div>
                    <a href='facebook.com' className='btn btn-primary text-capitalize fw-bold SignupBtn mt-4'>contact us <i class="fa-solid fa-arrow-right-long"></i></a>
                </div>:
                <div>
                    <NavLink to="/register" className='btn btn-primary text-capitalize fw-bold SignupBtn mt-4'>sign up now</NavLink>
                </div>}
                
            </div>
      </section>
    </div>
  )
}

export default Home
