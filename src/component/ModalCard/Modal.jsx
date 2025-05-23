import React from "react";
import "./card.css";
function Modal({handleClose,handleOffer}) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button className="close-btn"
        onClick={handleClose}
        
        >X</button>
        <div className="content">
          Click the Button below to accept Amazing Offer
        </div>
        <button className="accept-btn" onClick={handleOffer}>Accept Offer</button>
      </div>
    </div>
  );
}

export default Modal;
