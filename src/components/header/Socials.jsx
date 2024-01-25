import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub,faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
const Socials = () => {
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/faisal-rahman-258367213/" target='blank'><FontAwesomeIcon className='animl iconhover' icon={faLinkedin} size="2xl" style={{color: "#66FCF1",}} /></a>
        <a href="https://github.com/Pacific077" target='blank'><FontAwesomeIcon className='animg iconhover' icon={faGithub} size="2xl" style={{color: "66FCF1",}} /></a>
        <a href="https://www.instagram.com/faisalrahman557/" target='blank'><FontAwesomeIcon className='animi iconhover' icon={faInstagram} size="2xl" style={{color: "66FCF1",}} /></a>
        <a href="mailto: rahmanfaisal516@gmail.com" target='blank'><FontAwesomeIcon className='animg iconhover' icon={faEnvelope} size="2xl" style={{color: "66FCF1",}} /></a>
    </div>
  )
}

export default Socials