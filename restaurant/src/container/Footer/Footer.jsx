import React from 'react'
import { FooterOverlay, Newsletter } from '../../components'
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi'
import {images} from "../../constants"
import './Footer.css'


const Footer = () => {
  return (
    <div className='app__footer section__padding' id="login">
      <FooterOverlay/>
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans">Address</p>
          <p className="p__opensans">1st phone number</p>
          <p className="p__opensans">2nd phone number</p>
        </div>

        <div className="app__footer-links_logo">
          <img src={images.gericht} alt="footer_logo" />
          <p className="p__opensans">"Quote"</p>
          <img src={images.spoon} alt="" className="spoon__img" style={{marginTop:'15px'}}/>

          <div className="app__footer-links_icons">
            <FiFacebook />
            <FiTwitter />
            <FiInstagram />
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Mon-Fri</p>
          <p className="p__opensans">hour</p>
          <p className="p__opensans">Sat-Sun</p>
          <p className="p__opensans">hour</p>

        </div>
      </div>

      <div className="footer__copyright">
        <p className="p__opensans">2025. All rights reserved</p>
      </div>


    </div>
  )
}

export default Footer
