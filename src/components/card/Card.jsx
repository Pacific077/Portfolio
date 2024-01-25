import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './card.css'

const Card = (props) => {
  return (
    <div className="card1">
       <FontAwesomeIcon className='white' icon={props.brand} size='lg'/>
       <p>{props.title}</p>
       <p className='sub'>{props.subt}</p>
 
    </div>
    )
}

export default Card