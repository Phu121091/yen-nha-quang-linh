import React from 'react';
import './style.scss';

const Productcard = ({data}) => {
  return (
    <div className='card'>
        <img src={data.img} alt='to-yen' className='img-card'/>
        <h6>{data.title}</h6>
        <p>{data.cost}</p>

    </div>
  )
}

export default Productcard