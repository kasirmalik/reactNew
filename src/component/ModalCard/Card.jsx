import React, { useState } from 'react'
import "./card.css"
import Modal from './Modal';
function Card() {
    const [isShow, setisShow] = useState(false);
    const [isOffer, setisOffer] = useState(false);
    const handleModal = ()=>{
        setisShow(true)
    }
    const handleClose = ()=>{
        setisShow(false)
    };
    const handleOffer = ()=>{
        setisOffer(true)
        setisShow(false)
    };

  return (
    <div className=''>
      <div className="show-offer">
       { !isOffer &&<button 
        onClick={handleModal}
        className='offer-btn'
        >Show Offer</button>}
        {
            isOffer && 
            <div style={{fontSize:50}}>Offer Accepted</div>
        }
      </div>
      {
        isShow && <Modal handleClose={handleClose} handleOffer={handleOffer}/>
      }
    </div>
  )
}

export default Card
