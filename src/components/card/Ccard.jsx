import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Ccard = (props) => {
  return (
    <div className='conCard'>
        <div className="Cicon">
        <FontAwesomeIcon icon={props.icon} size='lg' />
        </div>
        <div className="Cbra">
            <h5>{props.mh5}</h5>
            <p>{props.mp}</p>
        </div>
        <div className="Cmesg">
            <p> send a message</p>
        </div>
    </div>
  )
}

export default Ccard