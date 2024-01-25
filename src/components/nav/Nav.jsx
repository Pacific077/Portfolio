import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlask, faHouseChimney} from '@fortawesome/free-solid-svg-icons'
import { faAddressBook } from '@fortawesome/free-solid-svg-icons'
import { faHandshake } from '@fortawesome/free-solid-svg-icons'
import { faAddressCard } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import './Nav.css'


const Nav = () => {
  const [colorChange, setColorchange] = useState(false);
  const [curntnav,setnav] = useState('#home');
    const changeNavbarColor = () => {
        if (window.scrollY >= 3200) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
  return (
    <div className="navcont">

   <nav  className={colorChange ? 'dark' :'' }>
    <a href="#home"  onClick={()=>setnav('#home')} className={curntnav==='#home'?'active':''}><FontAwesomeIcon className={colorChange ? 'light' :'' } icon={faHouseChimney} size="xl" /></a>
    <a href="#about" onClick={()=>setnav('#about')} className={curntnav==='#about'?'active':''}><FontAwesomeIcon className={colorChange ? 'light' :'' } icon={faAddressCard} size="xl" /></a>
    <a href="#experince" onClick={()=>setnav('#experince')} className={curntnav==='#experince'?'active':''}><FontAwesomeIcon className={colorChange ? 'light' :'' } icon={faFlask} size="xl" /></a>
    <a href="#contact" onClick={()=>setnav('#contact')} className={curntnav==='#contact'?'active':''}><FontAwesomeIcon className={colorChange ? 'light' :'' } icon={faAddressBook} size="xl" /></a>
    <a href="#footer" onClick={()=>setnav('#service')} className={curntnav==='#service'?'active':''}><FontAwesomeIcon className={colorChange ? 'light' :'' } icon={faHandshake} size="xl" /></a>
   </nav>
    </div>
  )
}

export default Nav