import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <footer>
        <div className='d-flex align-items-center justify-content-between container footer'>
            <div>
                <h1 className='text-white text-uppercase'>LuminaPad</h1>
            </div>
            <div className='d-flex flex-column gap-2 align-items-end'>
                <div>
                    <div className='nav-socialIcons social-icons'>
                        <i className="fa-brands fa-linkedin-in" />
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>
                <div>
                    <p className='text-white' style={{fontSize:"10px"}}>--Copyrights 2023-- All Rights Reserved here By Mazen Mahmoud Hosney</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer

