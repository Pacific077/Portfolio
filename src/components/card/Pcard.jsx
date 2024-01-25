import React from 'react'

const Pcard = (props) => {
  return (
    <div className='pcard'>
        <div className="pimg">
            <img className= 'pimg1' src={props.image}  alt="" />
        </div>
        <div className="pcon">
            <h2>{props.slogan}</h2>
            <div className="pbtns">
            <a className='btn' href={props.link} target='blank'>Github</a>
            <a className='btn btn_prim'  href={props.proj} target='blank'>Live Demo</a>
            </div>
        </div>
    </div>
  )
}

export default Pcard;