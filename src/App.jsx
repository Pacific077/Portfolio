import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experince from './components/experience/Experince'
import Portfolio from './components/portfolio/Portfolio'
// import Testimonials from './components/testimonials/Testimonials'
import Contacts from './components/contacts/Contacts'
import Footer from './components/footer/Footer'
import './index.css'
const App = () => {
  return (
    <>
    <Header />
    <Nav/>
    <About />
    <Experince />
    <Portfolio />
    {/* <Testimonials /> */}
    <Contacts />
    <Footer />
    </>
  )
}

export default App