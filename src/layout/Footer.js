import React from 'react'
import './Footer.css';
import  { faFacebookF,faTwitter,faInstagram,faLinkedinIn,faYoutube,faGithub } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
function Footer() {
  return (
    <footer>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <div className="socials">
                <a href="https://www.facebook.com/ieeetrcs/" target="_blank"><FontAwesomeIcon icon={ faFacebookF } className="social-icons"/></a>
                <a href="https://twitter.com/ieeetrcs" target="_blank"><FontAwesomeIcon icon={ faTwitter } className="social-icons"/></a>
                <a href="https://www.youtube.com/channel/UCoxVqwbhK25lQdqiARt66JA" target="_blank"><FontAwesomeIcon icon={ faYoutube } className="social-icons"/></a>
                <a href="https://github.com/ieeeturkeycs" target="_blank"><FontAwesomeIcon icon={ faGithub } className="social-icons"/></a>
                <a href="https://www.instagram.com/ieeetrcs/" target="_blank"><FontAwesomeIcon icon={ faInstagram } className="social-icons"/></a>
                <a href="https://www.linkedin.com/company/ieeetrcs/" target="_blank"><FontAwesomeIcon icon={ faLinkedinIn } className="social-icons"/></a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col text-center">
              <p style={{fontSize: '15px',color:'#353b48'}}>Designed &amp; Built by <a href="http://www.besimgurbuz.com" target="_blank">Besim Gürbüz.</a></p>
            </div>
          </div>
        </div>
      </footer>
  )
}
export default Footer;