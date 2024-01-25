import React from 'react'
import Pcard from '../card/Pcard'
import './portfolio.css'
import Parray from './Parray'

const fun1= (temp)=>{
  return <Pcard image={temp.image} slogan = {temp.slogan} link={temp.link} proj={temp.proj} />
}

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5 className="small">My Recent Works</h5>
       <h1  className='myexp'>Portfolio</h1>
       <div className="container prtcont">
        {Parray.map(fun1)}
       </div>
    </section>
  )
}

export default Portfolio