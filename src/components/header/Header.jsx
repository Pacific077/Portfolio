import React from 'react'
import Buttons from './Buttons';
import "./Header.css"
import me from '../../assets/SquarePic_20230513_22463474.jpg'
import Socials from './Socials';
import Typed from 'react-typed';
const Header = () => {
  return (
    <header id='home'>
      <div className="container header_container">
        <h3>Hello my name is</h3>
        <h1 className='grey_color'>Md Faisal Rahman </h1>
        <h1 className="text-color-light blue_color">I am a <Typed strings={['Developer', 'Student', 'Innovator', 'Programmer', 'Explorer']} typeSpeed={70} backSpeed={60} loop ></Typed> </h1>
        <Buttons />
        <Socials/>
        <div className="me">
          <img className="imgh"src={me} alt="me" />
        </div>
        <a href="#contact" className='scroll_down'>
          Scroll Down
        </a>
      </div>
    </header>
  )
}

export default Header;