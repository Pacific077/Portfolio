import React from 'react'
import Ccard from '../card/Ccard'
import CArray from './CoArray'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import './contacts.css'
const sent = ()=>{
  alert("sent");  
}
const fun1 = (temp)=>{
 return <Ccard icon={temp.icon} mh5={temp.messageh5} mp={temp.messagep} />
}
const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4sl866o', 'template_lgghjli', form.current, 'OHx-nHsJrP8SsUPwM')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
    }
    const handleSubmit = (e)=>{
      sendEmail(e);
      sent();
    }
  return (
    <section id="contact">
       <h5 className="small">Get in Touch</h5>
       <h1  className='myexp contHead'>Contact Me</h1>
       <div className="container Cocont">
        <div className="ccar">
          {CArray.map(fun1)}
        </div>
        <form ref={form} className='form' onSubmit={handleSubmit}>
          <input className='fname ip' name='name' type="text" placeholder='Your Name'/>
          <input className='femail ip' name='email' type="Email" placeholder='Your Email' />
          <textarea className='ip' placeholder='Your message' name="message" id="" cols="30" rows="10"></textarea>
          <button className='submit gbt' type='submit'>Send</button>
        </form>
       </div>
    </section>
  )
}

export default Contacts