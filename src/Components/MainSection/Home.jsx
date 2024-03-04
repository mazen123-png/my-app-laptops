import React from 'react'
import Logo from "../../assests/Logo.png"
import './Home.css'
import { NavLink } from 'react-router-dom'
const Home = () => {
  return (
    <div>
      <section className='HomeSection'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
                <div className=''>
                    <img src={Logo} alt="" />
                </div>
                <div className=''>
                    <h3 className='text-capitalize fs-4'>luminaPad the best website to sell labtops all over the world!</h3>
                </div>
                <div className=''>
                    <NavLink to="/register" className='btn btn-primary text-capitalize fw-bold SignupBtn mt-4'>sign up now</NavLink>
                </div>
            </div>
      </section>
    </div>
  )
}

export default Home
